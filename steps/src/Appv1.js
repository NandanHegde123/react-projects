import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Tiger" });
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
      //setTest({ name: "cat" });
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2" }}
              color="#fff"
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2" }}
              color="#fff"
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
