import { Link } from "react-router-dom";

function PeopleListItem({ person, people }) {
  console.log("4,,,,", people);
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.id.value}`} state={{ person }}>
        Profile
      </Link>
      <div></div>
      <Link to={`/view/${person.id.value}/edit`} state={{ person, people }}>
        Edit
      </Link>
    </li>
  );
}

export default PeopleListItem;
