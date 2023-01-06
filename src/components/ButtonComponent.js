
function ButtonComponent({ title, pry, sec }) {
  return (
    <button className={`app-button ${pry} ${sec}`}>
        { title }
    </button>
  );
}

export default ButtonComponent;