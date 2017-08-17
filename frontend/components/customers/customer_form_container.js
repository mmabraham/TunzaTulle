import { connect } from 'react-redux';
import { createCustomer } from '../../actions/customer_actions';
import CustomerForm from './customer_form';

const mapStateToProps = state => {
  return {
    errors: state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: customer => dispatch(createCustomer(customer)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm)
