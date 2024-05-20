import { useState } from "react";

function App() {
    return (
        <div className="App">
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
        </div>
    );
}

function Step() {
    const stepItems = ["Dream", "Belive", "Archieve"];
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function nextStep() {
        if (step === 3) return;
        setStep((step) => step + 1);
    }

    function prevStep() {
        if (step === 1) return;
        setStep((step) => step - 1);
    }

    return (
        <>
            <button
                className="close"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                x
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">Step: {stepItems[step - 1]}</p>
                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#526D82",
                                color: "#fff",
                            }}
                            onClick={prevStep}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: "#526D82",
                                color: "#fff",
                            }}
                            onClick={nextStep}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
