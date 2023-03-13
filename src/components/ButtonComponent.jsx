
function ButtonComponent({ title, type, pry, sec, tert, onClick }) {
  return (
    <button onClick={onClick} type={type} className={`app-button ${pry} ${sec} ${tert}`}>
        { title }
    </button>
  );
}

export default ButtonComponent;