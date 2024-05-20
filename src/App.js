function App() {
    return (
        <div className="steps">
            <div className="numbers">
                <div className="active">1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <p className="message">Step: dream</p>
            <div className="buttons">
                <button style={{ backgroundColor: "#526D82", color: "#fff" }}>
                    Previous
                </button>
                <button style={{ backgroundColor: "#526D82", color: "#fff" }}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
