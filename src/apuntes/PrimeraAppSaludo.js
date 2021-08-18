import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>

      <p> {subtitulo}</p>
    </>
  );
};
// asi muestro q sea string y que sea obligatorio saludar
//poner privasidad a mi componente obligarlos a saludar
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

// de esta manera le doy un valor por defecto al SUBTITULO
PrimeraApp.defaultProps = {
  subtitulo: "soy un subtitulo",
};

export default PrimeraApp;
