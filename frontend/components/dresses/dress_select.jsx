import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DressThumbnail from './dress_thumbnail';
import MenuItem from 'material-ui/MenuItem';

export default class DressSelect extends React.Component {
  constructor(props) {
    super(props);
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
          value: (<MenuItem><DressThumbnail dress={dress} /></MenuItem>)
        }
      )
    })
    this.setState({dataSource: this.allDressItems})
  }

  handleChange(dress, i) {
    this.props.onSelect(null, i, dress && dress.id )
  }

  render() {
    return this.allDressItems ? (
      <AutoComplete
        floatingLabelText="Dress"
        openOnFocus={true}
        maxSearchResults={5}
        dataSource={this.state.dataSource}
        filter={AutoComplete.fuzzyFilter}
        onNewRequest={this.handleChange.bind(this)}
      />
    ) : null;
  }
}
