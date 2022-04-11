import { useState } from "react";

function useStorageListener(sincronize) {
  const [storeChange, setStoreChange] = useState(false);

  window.addEventListener("storage", (event) => {
    console.log(event.key, "Hubo cambios en TODOS_V1");
    setStoreChange(true);
  });

  const toggleShow = () => {
    sincronize();
    setStoreChange(false);
  };
  return { show: storeChange, toggleShow };
}

export { useStorageListener };
