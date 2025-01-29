import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="close" onClick={handleToggle}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step: {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
{
  /* 

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    alert("Previous");
  }

  function handleNext() {
    alert("Next");
    setStep(step + 1);
  }
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
        <Buttons name="Next" onClick={handleNext} />
        <Buttons name="Previous" onClick={handlePrevious} />
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
*/
}
