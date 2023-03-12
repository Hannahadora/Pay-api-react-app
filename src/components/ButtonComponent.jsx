
function ButtonComponent({ title, type, pry, sec, tert }) {
  return (
    <button type={type} className={`app-button ${pry} ${sec} ${tert}`}>
        { title }
    </button>
  );
}

export default ButtonComponent;