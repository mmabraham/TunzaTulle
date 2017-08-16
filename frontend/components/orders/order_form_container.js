import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import { receiveErrors } from '../../actions/session_actions';
import OrderForm from './order_form';

const mapStateToProps = state => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (order) => dispatch(createOrder(order)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
