import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUsersData } from './index';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
} from '../ducks/data/users';


describe('users saga', () => {
  it('fetch users', () => {
    const response = {
      data: {
        items: [],
      },
    };
    const iterator = fetchUsersData({ q: 'test' });
    expect(iterator.next().value).toEqual(put(fetchUsersStart()));
    expect(iterator.next().value).toEqual(call(axios.get, 'https://api.github.com/search/users?q=test+in%3Alogin&type=Users'));
    expect(iterator.next(response).value).toEqual(put(fetchUsersSuccess(response.data.items)));
    expect(iterator.throw().value).toEqual(put(fetchUsersFail()));
  });
});
