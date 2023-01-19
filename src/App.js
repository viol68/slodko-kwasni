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
    codeGoal: "chuj",
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
        <div>
          {user.name.slice("m", "o") +
            " " +
            user.codeGoal.split(["o"], ["6"]) +
            ""}{" "}
        </div>
      ))}
    </div>
  );
}

export default App;
