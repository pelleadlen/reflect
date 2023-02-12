import { Header } from "./components/header/Header";
import { Timer } from "./components/timer/timer";
import "./scss/_global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
    </div>
  );
}

export default App;
