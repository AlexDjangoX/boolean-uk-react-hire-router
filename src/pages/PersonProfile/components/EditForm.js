import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function EditForm() {
  const [editPerson, setEditPerson] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  const [editEmail, setEditEmail] = useState("");

  const location = useLocation();

  useEffect(() => {
    const personData = location.state.person;
    setEditPerson(personData);
    const allPeople = location.state.people;
    console.log("All People EditForm: ", allPeople);
    setPeopleList(allPeople);
  }, [location]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("edit person ", editPerson.email);
    console.log("peopleList", peopleList);
    console.log(editEmail);
    // location.pathname = "/";
  }

  return (
    <React.Fragment>
      <h2>Person details</h2>
      {editPerson && (
        <div>
          <p>Email : {editPerson.email}</p>
          <p>Phone: {editPerson.phone}</p>
          <p>Phone: {editPerson.cell}</p>{" "}
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
