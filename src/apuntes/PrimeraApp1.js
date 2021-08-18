//import { Fragment } from "react";

// fragment  se ponen o no depende el uso <> </>

// sino hubiera nada en el componente <PrimeraApp  saludo=""/> mostrara el mensaje d aqui
const PrimeraApp = ({ saludo = "hola mundo" }) => {
  //const saludo = [1, 2, 3, 4, 5];
  //const saludo = true;
  //   const saludo = {
  //     nombre: "guido",
  //     edad: 32,
  //   };
  //   const saludo = "hola mundo";
  //   console.log(props);

  return (
    <>
      <h1>{saludo}</h1>
      {/* // para imprimir con llaves llamamos  pero no imprime FALSE Y TRUE*/}
      {/* // de esta forma puedo imprimer OBJETOS  */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p> mi primera aplicacion</p>
    </>
  );
};
export default PrimeraApp;
