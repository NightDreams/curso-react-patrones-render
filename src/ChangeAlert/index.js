import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css";
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p> ¿Hubo Cambios ?</p>
        <button onClick={() => toggleShow(false)}>Sincronizar tareas</button>
      </div>
    );
  } else {
    return null;
  }
}
// conect HOC - inyect feature.
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// export HOC - componente con feature inyectada.
export { ChangeAlertWithStorageListener };
