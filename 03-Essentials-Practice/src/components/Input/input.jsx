import "./Input.css"

export default function Input({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChange("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              onChange("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) =>
              onChange("duration", e.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}