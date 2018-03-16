import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './style.css';

const Spinner = () => (
  <div className="spinner" >
    <CircularProgress
      size={60}
      thickness={7}
      style={{ margin: 'auto' }}
    />
  </div>
);


export default Spinner;
