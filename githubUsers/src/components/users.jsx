import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List/List';
import Paper from 'material-ui/Paper';
import { map, isEmpty } from 'lodash';
import Spinner from './spinner';
import User from './user';
import Search from '../containers/search';

const Users = ({ users, isFetch }) => (
  <div style={{ width: '500px', margin: 'auto' }}>
    <Search />
    {
      isFetch ? <Spinner /> :
      <Paper style={{ padding: '20px' }}>
        {
        isEmpty(users) ?
          <div> Empty </div> :
          <List>
            {map(users, user => <User key={user.id} {...user} />)}
          </List>
        }
      </Paper>
    }
  </div>
);

Users.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  isFetch: PropTypes.bool.isRequired,
};

export default Users;
