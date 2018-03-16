import React from 'react';
import { Field } from 'redux-form';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui';

const Search = () => (
  <Paper style={{ display: 'flex', marginBottom: '20px' }}>
    <form style={{ margin: 'auto' }}>
      <Field name="login" component={TextField} floatingLabelText="login" />
    </form>
  </Paper>
);

export default Search;
