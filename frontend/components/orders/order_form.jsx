import React from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CustomerSelect from '../customers/customer_select_container';
import DressSelect from '../dresses/dress_select_container';

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

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchOrder().then(action => {
        const {start_date, end_date, event_date, status, customer, dresses} = action.order[this.props.id];
        const savedOrder = {
          start_date: new Date(start_date),
          end_date: new Date(end_date),
          event_date: new Date(event_date),
          status,
          customer_id: customer.id,
          dress_ids: dresses.map(dress => dress.id),
        }
        this.setState(savedOrder)
      })
    }
  }

  handleSubmit() {
    this.props.submit(this.state)
      .then((id) => this.props.history.push(`/orders/${id}`))
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
    const style = {
      padding: 30,
      width: '60%',
      minWidth: 500,
      position: 'relative',
      top: 100,
      bottom: 200,
      left: '25%',
    };

    const errors = this.props.errors;
    return (
      <Paper style={style} zDepth={5} >
        <DressSelect
          onSelect={this.handleChange('dress_ids')}
          ids={this.state.dress_ids}
          edit={this.props.edit}
          orderDates={{
            startDate: this.state.start_date,
            endDate: this.state.end_date,
          }}
          />
        <br />
        <CustomerSelect onSelect={this.handleChange('customer_id')} initialCustomerId={this.state.customer_id}/>
        <br />
        <SelectField
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
        <DatePicker
          floatingLabelText="Wedding Date"
          fullWidth={true}
          autoOk={true}
          onChange={this.handleEventChange}
          value={this.state.event_date}
          errorText={ errors ? errors.event_date : '' }
        />
        <DatePicker
          fullWidth={true}
          floatingLabelText="Shipping Date"
          autoOk={true}
          onChange={this.handleChange('start_date')}
          value={this.state.start_date}
          errorText={ errors ? errors.start_date : '' }
        />
        <DatePicker
          fullWidth={true}
          floatingLabelText="Return-By Date"
          autoOk={true}
          onChange={this.handleChange('end_date')}
          value={this.state.end_date}
          errorText={ errors ? errors.end_date : '' }
        />
        <RaisedButton primary={true} onTouchTap={this.handleSubmit} fullWidth={true}>
          Save
        </RaisedButton>
      </Paper>
    )
  }
}
