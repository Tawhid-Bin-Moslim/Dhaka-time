import Clock_heading from "./components/Clock_heading";
import Clock_slogan from "./components/Clock_slogan";
import Current_time from "./components/Current_time";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <Clock_heading />
      <Clock_slogan />
      <Current_time />
    </center>
  );
}

export default App;
