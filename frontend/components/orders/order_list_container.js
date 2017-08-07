import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors'
import { fetchOrders } from '../../actions/order_actions';
import OrderList from './order_list';

const mapStateToProps = state => {
  return {
    orders: asArray(state.orders),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
