import { useState } from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  function hirePerson(person) {
    setHiredPeople((current) => {
      return [...current, person];
    });
    // for (let item of hiredPeople) {
    //   if (item.name !== person.name) {
    //     console.log(item.name);
    //   }
    // }
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
              path="/profile/:id"
              element={<PersonProfile hirePerson={hirePerson} />}
            />
            <Route path="/profile/:id/edit" element={<PersonProfile />} />
          </Routes>
        </nav>
      </header>
    </>
  );
}
