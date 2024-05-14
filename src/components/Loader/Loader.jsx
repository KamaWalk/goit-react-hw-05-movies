import React from 'react';
import { FallingLines } from 'react-loader-spinner';
// import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
    </div>
  );
};

export default Loader;