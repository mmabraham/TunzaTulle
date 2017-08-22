import { connect } from 'react-redux';
import { createCustomer, updateCustomer, fetchCustomer } from '../../actions/customer_actions';
import CustomerForm from './customer_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    errors: state.errors,
    customer: state.customers[id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return ownProps.match.path.slice(11, 15) == 'edit' ? {
    id,
    processForm: customer => dispatch(updateCustomer(customer, id)),
    fetchCustomer: () => dispatch(fetchCustomer(id)),
  } : {
    processForm: customer => dispatch(createCustomer(customer)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerForm)
)
