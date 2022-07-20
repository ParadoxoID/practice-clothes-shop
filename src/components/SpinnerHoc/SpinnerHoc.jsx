import React from 'react';
import './SpinnerHoc.scss';

const SpinnerHoc = WrappedComponent => {
  const Spinner = ({ isLoading, ...restProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };
  return Spinner;
};

export default SpinnerHoc;
