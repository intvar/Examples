import { createSelector } from 'reselect';

export default createSelector(state => state.data.users, users => users.toJS());
