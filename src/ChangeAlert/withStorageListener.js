import React, { useState } from 'react';


function withStorageListener(WrappedComponent) {

  return function WrappedwithStorageListener(props) {
    const [storeChange, setstoreChange] = useState(false);
    return (
      <WrappedComponent
        show={storeChange}
        toggleShow={setstoreChange}
        {...props}
      >

      </WrappedComponent>
    );
  }
};


export { withStorageListener };
