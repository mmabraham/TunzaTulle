import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors'
import { fetchCustomers } from '../../actions/customer_actions';
import CustomerList from './customer_list';

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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
