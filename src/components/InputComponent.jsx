import ButtonComponent from "./ButtonComponent";

function InputComponent() {
  return (
    <div className="input-wrapper lg:shadow shadow-none">
      <input className="app-input" placeholder="Enter email address" />
      <ButtonComponent title={'Schedule a demo'} pry={'pry-btn'} />
    </div>
  );
}

export default InputComponent;