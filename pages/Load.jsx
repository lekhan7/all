import React from 'react';
import "./allcss/load.css"

function Load() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Load;