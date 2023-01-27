import { Description } from "./components/atoms/Description";
import { Name } from "./components/atoms/Name";
import { Background } from "./components/atoms/Background";
import { Hudzio } from "./components/Hudzio";
import { Dorka } from "./components/Dorka";
import { Gizmo } from "./components/Gizmo";

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
        <Description userData={user} />
      ))}
      {users.map((user) => (
        <Name userData={user} />
      ))}
      {users.map((user) => (
        <Background userData={user} />
      ))}
      {users.map((user) => (
        <Hudzio userData={user} />
      ))}
      {users.map((user) => (
        <Dorka userData={user} />
      ))}
      {users.map((user) => (
        <Gizmo userData={user} />
      ))}
    </div>
  );
}

export default App;
