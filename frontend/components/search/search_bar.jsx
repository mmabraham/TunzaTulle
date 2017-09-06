import React from 'react';
import { DateRangePicker } from 'react-dates';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FilterButtons from './filter_buttons';

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
            filters={['long', 'half', '3 / 4']}
            onChange={(val) => (this.handleFilterChange('sleeve_length')(null, null, val))}
            />
          <TextField
            floatingLabelText="Min Price (in cents)"
            onChange={this.handleFilterChange('price[min]')}
            value={(this.state.price && this.state.price.min) || (this.props.price && this.props.price.min) }
            />
          <TextField
            floatingLabelText="Max Price (in cents)"
            onChange={this.handleFilterChange('price[max]')}
            value={(this.state.price && this.state.price.max) || (this.props.price && this.props.price.max)}
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
