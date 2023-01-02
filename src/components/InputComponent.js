import ButtonComponent from "./ButtonComponent";

function InputComponent() {
  return (
    <div className="input-wrapper">
      <input className="app-input" placeholder="Enter email address" />
      <ButtonComponent title={'Schedule a demo'} className="pry-btn" />
    </div>
  );
}

export default InputComponent;