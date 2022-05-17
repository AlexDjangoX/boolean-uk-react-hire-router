import { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";

const userBaseUrl = "https://randomuser.me/api/";
const numberOfUsers = 50;

function Dashboard({ hiredPeople }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeopleData();
  }, []);

  async function getPeopleData() {
    try {
      const response = await fetch(`${userBaseUrl}?results=${numberOfUsers}`);
      const data = await response.json();
      setPeople(data.results);
    } catch (error) {
      console.log("User error; ", error);
    }
  }

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
