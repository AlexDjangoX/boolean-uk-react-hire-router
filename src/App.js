import { useState } from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditForm from "./pages/PersonProfile/components/EditForm";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  function hirePerson(person) {
    setHiredPeople((current) => {
      return [...current, person];
    });
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Routes>
            <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />

            <Route
              path="/view/:id"
              element={<PersonProfile hirePerson={hirePerson} />}
            />
            <Route path="/view/:id/edit" element={<EditForm />} />
          </Routes>
        </nav>
      </header>
    </>
  );
}
