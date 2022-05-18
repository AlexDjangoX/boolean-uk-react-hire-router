import { Link } from "react-router-dom";
import EditForm from "../../PersonProfile/components/EditForm";
function PeopleListItem({ person, people, setPeople }) {
  return (
    <li id={person.email}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.id.value}`} state={{ person }}>
        Profile
      </Link>
      <div></div>
      <Link to={`/view/${person.id.value}/edit`} state={{ person }}>
        Edit
      </Link>

      <EditForm setPeople={setPeople} people={people} person={person} />
    </li>
  );
}

export default PeopleListItem;
