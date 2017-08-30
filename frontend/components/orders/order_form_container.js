import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createOrder, updateOrder, fetchOrder } from '../../actions/order_actions';
import { receiveErrors } from '../../actions/session_actions';
import OrderForm from './order_form';

const mapStateToProps = state => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.match.path.slice(8, 12) === 'edit'
  const submit = edit ? updateOrder : createOrder;
  const id = edit ? ownProps.match.params.id : null;
  return {
    submit: (order) => dispatch(submit(order, id)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    fetchOrder: () => dispatch(fetchOrder(id)),
    edit,
    id,
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderForm)
)
