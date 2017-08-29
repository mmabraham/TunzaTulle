import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOrder, deleteOrder } from '../../actions/order_actions';
import OrderPage from './order_page';

const mapStateToProps = (state, {match}) => {
  return {
    order: state.orders[match.params.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchOrder: () => dispatch(fetchOrder(ownProps.match.params.id)),
    deleteOrder: () => {
      dispatch(deleteOrder(ownProps.match.params.id))
        .then(() => ownProps.history.push('/orders'))
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderPage)
);
