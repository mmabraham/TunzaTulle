import React from 'react';
import { DateRangePicker } from 'react-dates';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
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
      this.setState({[filterType]: val});
      this.props.updateFilter(filterType, val);
    }
  }

  render() {
    return (
      <Toolbar>
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
      </Toolbar>
    )
  }
}
