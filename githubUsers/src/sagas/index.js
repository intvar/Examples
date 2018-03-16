import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USERS,
  fetchUsersFail,
  fetchUsersSuccess,
  fetchUsersStart,
} from '../ducks/data/users';


export function* fetchUsersData({ q }) {
  try {
    if (!q) return;
    const url = `https://api.github.com/search/users?q=${q}+in%3Alogin&type=Users`;
    yield put(fetchUsersStart());
    const response = yield call(axios.get, url);
    const usersData = response.data.items;
    yield put(fetchUsersSuccess(usersData));
  } catch (err) {
    yield put(fetchUsersFail());
    console.log(err);
  }
}

export default function* watchFetchUsersData() {
  yield takeLatest(FETCH_USERS, fetchUsersData);
}
