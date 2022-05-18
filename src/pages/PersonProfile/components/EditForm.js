import React from "react";
import { useState } from "react";

function EditForm({ setPeople, people, person }) {
  const [editEmail, setEditEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    UpdateEmail(editEmail);
  }

  function UpdateEmail(email) {
    const edited = people.map((el) => {
      if (el.id === person.id) {
        return { ...person, email: editEmail };
      }
      return person;
    });

    setPeople(edited);
  }

  return (
    <React.Fragment>
      <h2>Person details</h2>
      {person && (
        <div>
          <p>Email : {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>Phone: {person.cell}</p>{" "}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">New email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEditEmail(e.target.value)}
          value={editEmail}
        />
        <button type="submit">Change Email</button>
      </form>
    </React.Fragment>
  );
}

export default EditForm;
