import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HireForm from "./components/HireForm";

function PersonProfile({ hirePerson }) {
  const [person, setPerson] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const personData = location.state.person;
    setPerson(personData);
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  );
}

export default PersonProfile;
