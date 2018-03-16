import { connect } from 'react-redux';
import Users from '../components/users';
import getUsers from '../../src/ducks/selectors/users';

const mapStateToProps = getUsers;


export default connect(mapStateToProps)(Users);
