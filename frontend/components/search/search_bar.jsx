import React from 'react';
import { DateRangePicker } from 'react-dates';

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

  render() {
    return (
      <div>
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
