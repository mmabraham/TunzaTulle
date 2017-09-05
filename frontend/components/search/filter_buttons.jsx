import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle(filter) {
    return () => {
      const newState = this.state;
      if (newState[filter]) {
        newState[filter] = false;
      } else {
        newState[filter] = true;
      }
      this.setState(newState);

      const filters = [];
      for (let f in newState) {
        if (newState[f]) {
          filters.push(f)
        }
      }
      this.props.onChange(filters);
    }
  }

  buttons() {
    return this.props.filters.map(filter => {
      const isSelected = this.state[filter];
      return (
        <RaisedButton
          key={filter}
          label={filter}
          primary={isSelected}
          default={!isSelected}
          onTouchTap={this.toggle(filter)}
        />
      )
    })
  }

  render() {
    return (<div>
      {this.buttons()}
    </div>)
  }
}
