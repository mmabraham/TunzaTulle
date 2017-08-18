import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DressThumbnail from './dress_thumbnail';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';

export default class DressSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDresses: this.props.selectedDresses };
  }

  componentDidMount() {
    this.props.fetchDresses()
      .then(this.setDressItems.bind(this));
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

  handleChange(item, i) {
    const selectedDress = this.props.dresses[i]
    if (!this.state.selectedDresses.includes(selectedDress)) {
      this.setState({
        selectedDresses: this.state.selectedDresses.concat([selectedDress])
      })
      this.props.onSelect(null, i, this.state.selectedDresses.map(dress => dress.id));
    }
  }

  render() {
    const selectedDressComponenets = this.state.selectedDresses.map(dress => {
      return (
      <ListItem key={dress.id} >
        <DressThumbnail dress={dress} />
      </ListItem>
    )})

    return (
      <div>
        <List>
          {selectedDressComponenets}
        </List>
        {this.allDressItems ? (
          <AutoComplete
            floatingLabelText="Dress"
            openOnFocus={true}
            maxSearchResults={5}
            dataSource={this.state.dataSource}
            filter={AutoComplete.fuzzyFilter}
            onNewRequest={this.handleChange.bind(this)}
            />
        ) : null}
      </div>
    )
  }
}
