import "./button.css";

function Button({ click }) {
  return (
    <div>
      <button onClick={click}>Mostrar frutas vermelhas</button>
    </div>
  );
}

export default Button;
