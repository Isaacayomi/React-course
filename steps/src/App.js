const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <NumberButtons value="1" step={step} />
        <NumberButtons value="2" step={step} />
        <NumberButtons value="3" step={step} />
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <Buttons name="Next" />
        <Buttons name="Previous" />
      </div>
    </div>
  );
}

function NumberButtons(props) {
  return (
    <div className={`${props.step >= props.value ? "active" : ""}`}>
      {props.value}
    </div>
  );
}

function Buttons(props) {
  return (
    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
        {props.name}
      </button>
    </div>
  );
}
