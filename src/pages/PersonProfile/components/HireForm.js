import { useState } from "react";
import { useLocation } from "react-router-dom";

function HireForm({ person, hirePerson }) {
  const [wage, setWage] = useState(0);

  const location = useLocation();

  function handleSubmit(event) {
    event.preventDefault();

    hirePerson({ ...person, wage: wage });
    location.pathname = "/";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
