import DressForm from './dress_form';
import { createDress } from '../../actions/dress_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    // id: ownProps.location.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (dress) => dispatch(createDress(dress)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DressForm)
