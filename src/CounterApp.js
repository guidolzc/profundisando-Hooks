import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  // aqui usestate counter = tiene valores   setcounter = actualiza el valor de counter  y en el ustate se le manda el valor a counter
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    //console.log(e);
    // setCounter(counter+1)
    setCounter((c) => c + 1);
  };

  // de esta forma tambien podemos hacer la resta y reset

  const handlReset = () => setCounter(value);
  const handlRestar = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      {/* //aqui puedo poner directamente la funcion para q reste y resetee */}
      <button onClick={handleAdd}>+1</button>
      {/* <button onClick={() => setCounter(value)}>Reset</button> */}
      <button onClick={handlReset}>Reset</button>
      {/* <button onClick={() => setCounter(counter - 1)}>-1</button> */}
      <button onClick={handlRestar}>-1</button>
    </>
  );
};
CounterApp.propTypes = {
  saludo: PropTypes.number.isRequired,
};

export default CounterApp;
