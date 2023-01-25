import { Filip } from "./components/Filip";
import { Grumcio } from "./components/Grumcio";
import { Roxi } from "./components/Roxi";
import { Hudzio } from "./components/Hudzio";
<<<<<<< HEAD
import { Dorka } from "./components/Dorka";
import { Gizmo } from "./components/Gizmo";
=======
import { Kanonashi } from "./components/Kanonashi";
>>>>>>> de5d188bb6995381dff4de22fc8c25a17965d234

const user1 = "4lip";
const user2 = "Kanonashi";
const user3 = "Gizmo";
const user4 = "Grumcio";
const user5 = "Hudzio";
const user6 = "Dorka";
const user7 = "Roxi";

const users = [
  {
    name: "4lip",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Kanonashi",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Gizmo",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Grumcio",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Hudzio",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Dorka",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Roxi",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
];

function App() {
  return (
    <div className="App">
      {users.map((user) => (
        <Filip userData={user} />
      ))}
      {users.map((user) => (
        <Grumcio userData={user} />
      ))}
      {users.map((user) => (
        <Roxi userData={user} />
      ))}
<<<<<<< HEAD
    {users.map((user) => (
        <Hudzio userData={user} />
      ))}
      {users.map((user) => (
        <Dorka userData={user} />
      ))}
      {users.map((user) => (
        <Gizmo userData={user} />
=======
      {users.map((user) => (
        <Kanonashi userData={user} />
>>>>>>> de5d188bb6995381dff4de22fc8c25a17965d234
      ))}
    </div>
  );
}

export default App;
