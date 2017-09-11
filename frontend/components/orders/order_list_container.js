import { connect } from 'react-redux';
import { asArray, byEventDate } from '../../reducers/selectors'
import { fetchOrders } from '../../actions/order_actions';
import { updateOrderFilter } from '../../actions/filter_actions';
import OrderList from './order_list';

const mapStateToProps = state => {
  console.log(byEventDate(state.orders))
  return {
    orders: byEventDate(state.orders),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // will fetch only customers' orders if rendered from customer detail
    fetchOrders: () => dispatch(fetchOrders({customer_id: ownProps.customerId})),
    updateFilter: (filterType, filter) => dispatch(updateOrderFilter(filterType, filter)),
    withFilters: ownProps.customerId ? false : true,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
