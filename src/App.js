import "./App.css";
import ContextA from "./components/ContextA";
import Theme from "./components/Theme";
//import Datafetcher from "./components/Datafetcher";
//import Timer from "./components/Timer";
//import { Create, Usercontext } from "./Context/Create";
//import ContextB from "./components/ContextB";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <Theme />
    </ThemeContext>
  );
}

export default App;
