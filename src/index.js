import React from "react";
import ReactDOM from "react-dom";
// import App from './App/index.js';
import "./index.css";

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.name}!
    </h1>
  );
}
// 1- setup HOC
function withSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      );
    };
  };
}

// 2 instance HOC and  - Donde vamos a conectar el HOC  - feature
const AppWithSaludo = withSaludo("wenas")(App);

ReactDOM.render(
  <AppWithSaludo name={"juanita"} />,
  document.getElementById("root")
);
