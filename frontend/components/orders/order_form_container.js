import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import OrderForm from './order_form';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (order) => dispatch(createOrder(order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
