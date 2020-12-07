import React from 'react';

// Styled-Components
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

/*
  HOC stands for Higher-Order-Component. It is essentially a function which takes a component
  as an argument, returning an altered component. If "isLoading" is true, render spinner. 
  If false then return "WrappedComponent", passing all other props except for "isLoading". 
  The "WithSpinner" is our HOC. It is a function that takes some component that we want to wrap 
  with the functionality of our spinner loading feature and that wrapped component get passed into this 
  new component that then determines based on the "isLoading" prop, if true render "SpinnerOverlay" 
  else render "WrappedComponent".
*/

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
