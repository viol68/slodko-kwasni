const user1 = "4lip";
const user2 = "Hudziak";
const user3 = "Kanonashi";
const user4 = "Grumcio";
const user5 = "Gizmo";
const user6 = "Dorka";

const users = [
  {
    name: "4lip",
    codeGoal: "",
  },
  {
    name: "Kanonashi",
    codeGoal: "Gra 2D płaska i fajna + umiejętności UX",
  },
  {
    name: "Grumcio",
    codeGoal: "Stworzenie portfolio elektronicznego online",
  },
  {
    name: "Hudziak",
    codeGoal: "",
  },
  {
    name: "Dorka",
    codeGoal: "",
  }
];

function App() {
  return (
    <div className="App">
      {users.map((user) => <div>{user.name + " " + user.codeGoal}</div>)}

    </div>
  );
}

export default App;
