import React from 'react';
import '../styles/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
