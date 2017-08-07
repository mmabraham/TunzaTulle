import React from 'react';
import { DateRangePicker } from 'react-dates';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

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
      this.setState({[filterType]: val || e.target.value});
      this.props.updateFilter(filterType, val || e.target.value);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={(dates) => this.handleDatePick(dates)}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />

        <SelectField
          value={this.state.sleeve_length}
          onChange={this.handleFilterChange('sleeve_length')}
          >
          <MenuItem primaryText="Sleeve length"/>
          <MenuItem value={'long'} primaryText="Long" />
          <MenuItem value={'half length'} primaryText="Half Length" />
          <MenuItem value={'3 / 4'} primaryText="3 / 4" />
        </SelectField>

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
    </div>
    )
  }
}

//
// <RadioButtonGroup
//   valueSelected={this.state.sleeve_length}
//   onChange={this.handleFilterChange('sleeve_length')}
//   >
//   <MenuItem value={null} label="Sleeve length"/>
//   <MenuItem value={'long'} label="Long" />
//   <MenuItem value={'half length'} label="Half Length" />
//   <MenuItem value={'3 / 4'} label="3 / 4" />
// </RadioButtonGroup>