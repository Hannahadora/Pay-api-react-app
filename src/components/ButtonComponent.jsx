
function ButtonComponent({ title, pry, sec, tert }) {
  return (
    <button className={`app-button ${pry} ${sec} ${tert}`}>
        { title }
    </button>
  );
}

export default ButtonComponent;