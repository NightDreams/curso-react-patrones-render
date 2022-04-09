import React, { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedwithStorageListener(props) {
    const [storeChange, setStoreChange] = useState(false);

    window.addEventListener("storage", (event) => {
      console.log(event.key, "Hubo cambios en TODOS_V1");
      setStoreChange(true);
    });

    const toggleShow = () => {
      props.sincronize();
      setStoreChange(false);
    };
    return (
      <WrappedComponent
        show={storeChange}
        toggleShow={toggleShow}
      ></WrappedComponent>
    );
  };
}

export { withStorageListener };
