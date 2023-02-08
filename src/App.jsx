import { Header } from "./components/header/Header";
import { ModeSelector } from "./components/mode/modeSelector";
import { RadioButtons } from "./components/mode/radioButtons";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ModeSelector /> */}
      <RadioButtons />
    </div>
  );
}

export default App;
