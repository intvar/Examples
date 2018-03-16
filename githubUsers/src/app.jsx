import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './createStore';
import Users from './containers/users';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Users />
    </MuiThemeProvider>
  </Provider>);

export default App;
