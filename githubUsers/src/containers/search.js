import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Search from '../components/search';
import { fetchUsers } from '../ducks/data/users';

const mapDispatchToProps = {
  onChange: ({ login }) => fetchUsers(login),
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'searchForm',
})(Search));
