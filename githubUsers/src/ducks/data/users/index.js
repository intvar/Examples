import { Map } from 'immutable';
import { mapKeys } from 'lodash';

export const FETCH_USERS = 'users/FETCH_USERS';
const FETCH_USERS_START = 'users/FETCH_USERS_START';
const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';
const FETCH_USERS_FAIL = 'users/FETCH_USERS_FAIL';

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

export const fetchUsersFail = () => ({
  type: FETCH_USERS_FAIL,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

export const fetchUsers = q => ({
  type: FETCH_USERS,
  q,
});

export const initialState = Map({
  isFetch: false,
  users: Map(),
});

export default function (state = initialState, { type, users }) {
  switch (type) {
    case FETCH_USERS_START:
      return state.set('isFetch', true);
    case FETCH_USERS_SUCCESS:
      return state.merge({
        isFetch: false,
        users: Map(mapKeys(users, 'id')),
      });
    case FETCH_USERS_FAIL:
      return state.set('isFetch', false);
    default:
      return state;
  }
}
