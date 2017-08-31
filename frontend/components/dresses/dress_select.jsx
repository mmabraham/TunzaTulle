import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DressThumbnail from './dress_thumbnail';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import AlertError from 'material-ui/svg-icons/alert/error';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';


export default class DressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedDresses: [],
    };
  }

  componentDidMount() {
    this.props.fetchDresses()
      .then(this.setDressItems.bind(this));
  }

  componentWillReceiveProps({selectedDresses}) {
    if (!this.state.addedPreselectedDresses &&
          !this.state.selectedDresses[0] && selectedDresses[0]) {
      this.setState({selectedDresses, addedPreselectedDresses: true})
    }
  }

  setDressItems() {
    this.allDressItems = this.props.dresses.map(dress => {
      return (
        {
          text: `${dress.barcode}  -  ${dress.title}`,
          value: (<MenuItem><DressThumbnail dress={dress} /></MenuItem>),
        }
      )
    })
    this.setState({dataSource: this.allDressItems})
  }

  isConflict(dressOption) {
    const { startDate, endDate } = this.props.orderDates;
    return !this.props.selectedDresses.some(dress => dress.id === dressOption.id) &&
      dressOption.order_dates.some(order => {
        return startDate <= Date.parse(order.end_date) &&
          endDate >= Date.parse(order.start_date);
      });
  }

  handleChange(item, i) {
    const selectedDress = this.props.dresses[i]
    if (!this.state.selectedDresses.includes(selectedDress)) {
      this.setState({
        selectedDresses: this.state.selectedDresses.concat([selectedDress]),
        searchText: '',
      })
      this.props.onSelect(null, i, this.state.selectedDresses.map(dress => dress.id));
    }
  }

  removeDress(dressToRemove) {
    const selectedDresses = this.state.selectedDresses.filter(dress => dress != dressToRemove)
    this.setState({
      selectedDresses,
    })
    this.props.onSelect(null, null, selectedDresses.map(dress => dress.id))
  }

  render() {
    if (this.props.dresses.length == 0) {
      return ( <CircularProgress /> );
    }

    const selectedDressComponents = this.state.selectedDresses.map((dress) => {
      const conflict = this.isConflict(dress);
      return (
        <Chip
          onRequestDelete={() => this.removeDress(dress)}
          key={dress.id}
          style={conflict ? {border: '2px solid red'} : {} }
          >
          <DressThumbnail dress={dress} />
          {conflict ? (
            <div>
              <span style={{color: 'red'}} >
                This dress is not available for the selected dates.
              </span>
              <AlertError color="red"/>
            </div>
          ) : (
            <ActionCheckCircle color="green"/>
          )}
        </Chip>
      )
    })

    return (
      <div>
        <List>
          {selectedDressComponents}
        </List>
        {this.allDressItems ? (
          <AutoComplete
            floatingLabelText="Dress"
            openOnFocus={true}
            maxSearchResults={5}
            dataSource={this.state.dataSource}
            filter={AutoComplete.fuzzyFilter}
            onNewRequest={this.handleChange.bind(this)}
            searchText={this.state.searchText}
            />
        ) : null}
      </div>
    )
  }
}
