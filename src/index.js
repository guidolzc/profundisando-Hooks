import ReactDOM from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

//console.log("hola mundo");

// const saludo = <h1>hola mundo</h1>;

const divRoot = document.querySelector("#app");

//ReactDOM.render(<PrimeraApp saludo="hola ,soy GOKU" />, divRoot);
ReactDOM.render(<CounterApp value="soy leyenda" />, divRoot);

// console.log(saludo);
// console.log(divRoot);
