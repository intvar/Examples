import { Map } from 'immutable';
import users, {
  initialState,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
} from './index';

import response from './response.json';

describe('users reducer', () => {
  it('fetchUsersStart', () => {
    const actualState = users(initialState, fetchUsersStart());
    expect(actualState.get('isFetch')).toBeTruthy();
  });
  it('fetchUsersSuccess', () => {
    const beginState = Map({
      isFetch: true,
      users: Map(),
    });
    const actualState = users(beginState, fetchUsersSuccess(response.items));
    expect(actualState.get('users').size).toBe(30);
    expect(actualState.get('isFetch')).toBeFalsy();
  });
  it('fetchUsersFail', () => {
    const beginState = Map({
      isFetch: true,
      users: Map(),
    });
    const actualState = users(beginState, fetchUsersFail());
    expect(actualState.get('isFetch')).toBeFalsy();
  });
});
