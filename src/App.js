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
        <div>{user.name + "Kanonashi" + user.codeGoal}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + "Gizmo" + user.codeGoal}</div>
      ))}
      {users.map((user) => (
        <div>
          {user.name.slice("G", "o") +
            "Grumcio" +
            user.codeGoal.split(["o"], ["6"])}
        </div>
      ))}
      {users.map((user) => (
        <div>{user.name + "Hudziak" + user.codeGoal}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + "Dorka" + user.codeGoal}</div>
      ))}
      {users.map((user) => (
        <div>{user.name + "Roxi" + user.codeGoal}</div>
      ))}
    </div>
  );
}

export default App;
