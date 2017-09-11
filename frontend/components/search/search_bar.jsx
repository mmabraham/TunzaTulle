import React from 'react';
import { DateRangePicker } from 'react-dates';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FilterButtons from './filter_buttons';
import RangeSlider from './range_slider';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this. state = {};
  }

  handleDatePick(dates) {
    this.setState(dates);
    if (this.state.focusedInput === 'endDate') {
      this.props.updateFilter(
        'dates',
        {start_date: dates.startDate.toDate(), end_date: dates.endDate.toDate()}
      );
    }
  }

  handleFilterChange(filterType) {
    return (e, i, val) => {
      const value = val || e.target.value;
      this.setState({[filterType]: value});
      this.props.updateFilter(filterType, value);
    }
  }

  render() {
    return (
      <div className="search-bar">
          <FilterButtons
            filters={['long', '3 / 4', 'above elbow', 'short']}
            onChange={(val) => (this.handleFilterChange('sleeve_length')(null, null, val))}
            />
          <TextField
            floatingLabelText="Color"
            onChange={this.handleFilterChange('color')}
            value={this.state.color || this.props.color }
            />
          <TextField
            floatingLabelText="Waist"
            onChange={this.handleFilterChange('waist')}
            value={this.state.waist || this.props.waist }
            />
          <TextField
            floatingLabelText="Height"
            onChange={this.handleFilterChange('height')}
            value={this.state.height || this.props.height}
            />
          <TextField
            floatingLabelText="Age"
            onChange={this.handleFilterChange('age')}
            value={this.state.age || this.props.age}
            />
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={(dates) => this.handleDatePick(dates)}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
    </div>
    )
  }
}
