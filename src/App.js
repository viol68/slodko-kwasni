import { Description } from "./components/atoms/Description";
import { Name } from "./components/atoms/Name";
import { Background } from "./components/atoms/Background";
import { Hudzio } from "./components/Hudzio";
import { Profile } from "./components/molecules/Profile";
import { Gizmo } from "./components/Gizmo";
import { Navigation } from "./components/molecules/Navigation";
import { SectionWork } from "./components/organisms/SectionWork";
import { SectionAbout } from "./components/organisms/SectionAbout";
import { SectionWelcome } from "./components/organisms/SectionWelcome";



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
      <Name userData={users[0]} />
      <Navigation />
      <SectionWork />
      <SectionAbout />
      <SectionWelcome />
    </div>
  );
}

export default App;
