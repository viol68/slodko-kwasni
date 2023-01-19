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
        <div>{user.name.repeat(3) + user.codeGoal.toUpperCase() + "4lip"}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + user.codeGoal + "Kanonashi"}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + user.codeGoal + "Gizmo"}</div>
      ))}
      {users.map((user) => (
        <div>
          {user.name.slice("G", "o") +
            user.codeGoal.split(["o"], ["6"]) +
            "Grumcio"}
        </div>
      ))}
      {users.map((user) => (
        <div>{user.name.charAt(3) + user.codeGoal.length + "Hudziak"}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + user.codeGoal + "Dorka"}</div>
      ))}
      {users.map((user) => (
        <div>{user.name.concat(" ", " Koksi") + user.codeGoal.indexOf("portfolio") + "Roxi"}</div>
      ))}
    </div>
  );
}

export default App;
