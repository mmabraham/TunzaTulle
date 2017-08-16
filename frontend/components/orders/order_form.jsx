import React from 'react';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props)
    const event_date = new Date();
    const start_date = new Date();
    const end_date = new Date();
    event_date.setDate(start_date.getDate() + 7)
    end_date.setDate(event_date.getDate() + 7)
    start_date.setHours(0, 0, 0, 0);
    event_date.setHours(0, 0, 0, 0);
    end_date.setHours(0, 0, 0, 0);

    this.state = this.props.order || { event_date, start_date, end_date }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
  }

  handleSubmit() {
    this.props.createOrder(this.state)
      .fail(res => this.props.receiveErrors(res.responseJSON));
  }

  handleChange(field) {
    return (e, i, val) => {
      this.setState({[field]: (e && e.target.value) || val || i })
    }
  }

  handleEventChange(_, event_date) {
    const start_date = new Date(event_date)
    const end_date = new Date(event_date)
    start_date.setDate(event_date.getDate() - 7)
    end_date.setDate(event_date.getDate() + 7)
    this.setState({ event_date, start_date, end_date })
  }

  render() {
    const errors = this.props.errors;
    return (
      <form>
        <DatePicker
          floatingLabelText="Wedding Date"
          autoOk={true}
          onChange={this.handleEventChange}
          value={this.state.event_date}
          errorText={ errors ? errors.event_date : '' }
        />
        <DatePicker
          floatingLabelText="Shipping Date"
          autoOk={true}
          onChange={this.handleChange('start_date')}
          value={this.state.start_date}
          errorText={ errors ? errors.start_date : '' }
        />
        <DatePicker
          floatingLabelText="Return-By Date"
          autoOk={true}
          onChange={this.handleChange('end_date')}
          value={this.state.end_date}
          errorText={ errors ? errors.end_date : '' }
        />
        <SelectField
          fullWidth={true}
          floatingLabelText="Status"
          value={this.state.status}
          onChange={this.handleChange('status')}
          errorText={ errors ? errors.status : '' }
        >
          <MenuItem value={'pending'} primaryText="Pending" />
          <MenuItem value={'approved'} primaryText="Approved" />
          <MenuItem value={'shipped'} primaryText="Shipped" />
          <MenuItem value={'returned'} primaryText="Returned" />
          <MenuItem value={'canceled'} primaryText="Canceled" />
        </SelectField>
        <RaisedButton primary={true} onTouchTap={this.handleSubmit}>
          Save
        </RaisedButton>
      </form>
    )
  }
}
