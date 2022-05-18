import PeopleListItem from "./PeopleListItem";

function PeopleList({ people, setPeople }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          person={person}
          people={people}
          setPeople={setPeople}
        />
      ))}
    </ul>
  );
}

export default PeopleList;
