import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors'
import { fetchOrders } from '../../actions/order_actions';
import OrderList from './order_list';

const mapStateToProps = state => {
  return {
    orders: asArray(state.orders),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // will fetch only customers' orders if rendered from customer detail
    fetchOrders: () => dispatch(fetchOrders({customer_id: ownProps.customerId})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
