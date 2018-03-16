import React from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import PropTypes from 'prop-types';

const User = ({ login, avatar_url }) =>
  (<ListItem
    primaryText={login}
    leftAvatar={<Avatar src={avatar_url} />}
  />);

User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default User;
