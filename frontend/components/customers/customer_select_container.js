import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors'
import { fetchCustomers } from '../../actions/customer_actions';
import CustomerSelect from './customer_select';

const mapStateToProps = state => {
  return {
    customers: asArray(state.customers),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSelect)
