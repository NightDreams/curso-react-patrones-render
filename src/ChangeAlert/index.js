import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) { return <p> ¿Hubo Cambios ?</p> }
  else { return <p>no hubo cambios</p> }
}
// conect HOC - inyect feature. 
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// export HOC - componente con feature inyectada. 
export { ChangeAlertWithStorageListener }