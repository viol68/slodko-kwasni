import { Name } from "./components/Name";

const user1 = "4lip";
const user2 = "Kanonashi";
const user3 = "Gizmo";
const user4 = "Grumcio";
const user5 = "Hudziak";
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
    name: "Hudziak",
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
        <Name userData={user}/>
      ))}
      {users.map((user) => (
        <div>{user.name.charAt(3) + user.codeGoal.length + "Kanonashi"}</div>
      ))}
      {users.map((user) => (
        <div>
          {user.name.substring(3) + user.codeGoal.toLowerCase() + "Gizmo"}
        </div>
      ))}
      {users.map((user) => (
        <div>
          {user.name.slice("G", "o") +
            user.codeGoal.split(["o"], ["6"]) +
            "Grumcio"}
        </div>
      ))}
      {users.map((user) => (
        <div>{user.name + user.codeGoal + "Hudziak"}</div>
      ))}
      {users.map((user) => (
        <div>{user.name.replace() + user.codeGoal.endsWith("a") + "Dorka"}</div>
      ))}
      {users.map((user) => (
        <div>
          {user.name.concat(" ", " Koksi") +
            user.codeGoal.indexOf("portfolio") +
            "Roxi"}
        </div>
      ))}
    </div>
  );
}

export default App;
