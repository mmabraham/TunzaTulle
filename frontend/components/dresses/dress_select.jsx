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
      const available = this.isAvailable(dress);
      return ({
          text: `${dress.barcode}  -  ${dress.title}`,
          value: (<MenuItem>
                    <Chip
                      onRequestDelete={() => this.removeDress(dress)}
                      key={dress.id}
                      style={available ? {} : {border: '2px solid red'} }
                    >
                      <DressThumbnail dress={dress} />
                      {
                        available ? (
                          <ActionCheckCircle color="green"/>
                        ) : (
                          <div>
                            <span style={{color: 'red'}} >
                              This dress is not available for the selected dates.
                            </span>
                            <AlertError color="red"/>
                          </div>
                        )
                      }
                    </Chip>
                  </MenuItem>),
        })
    })
    this.setState({dataSource: this.allDressItems})
  }

  isAvailable(dressOption) {
    // console.log(dressOption)
    // console.log(this.props.order_id)
    console.log(this.props.orderDates)
    const order_id = this.props.order_id;
    const { startDate, endDate } = this.props.orderDates;
    const noConflict = dressOption.order_dates.every(order => {
        const a = startDate > Date.parse(order.end_date); // is completely after
        const b = endDate < Date.parse(order.start_date); // or completely before
        const c = order.id == order_id; // or the current order
        console.log(a, b, c)
        return a || b || c
      });
      // console.log(dressOption);
      console.log(noConflict);
      return noConflict
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
      const available = this.isAvailable(dress);
      return (
        <Chip
          onRequestDelete={() => this.removeDress(dress)}
          key={dress.id}
          style={available ? {} : {border: '2px solid red'}}
          >
          <DressThumbnail dress={dress} />
            {
              available ? (
                <ActionCheckCircle color="green"/>
              ) : (
                <div>
                  <span style={{color: 'red'}} >
                    This dress is not available for the selected dates.
                  </span>
                  <AlertError color="red"/>
                </div>
              )
            }
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
