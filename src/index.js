import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";

import "./index.css";

//console.log("hola mundo");

// const saludo = <h1>hola mundo</h1>;

const divRoot = document.querySelector("#app");

//ReactDOM.render(<PrimeraApp saludo="hola ,soy GOKU" />, divRoot);

// RENDER == ENVIA ESTO
ReactDOM.render(<CounterApp value={10} />, divRoot);
// console.log(saludo);
// console.log(divRoot);
