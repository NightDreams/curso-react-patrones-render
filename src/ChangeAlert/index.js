import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css";
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p> ¿Quieres sincronizar tus TODOs? </p>
          <button onClick={() => toggleShow(false)}>Yes!</button>
        </div>
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
