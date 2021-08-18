import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button>+1</button>
    </>
  );
};

CounterApp.proptype = {
  value: PropTypes.string.isRequired,
};
export default CounterApp;
