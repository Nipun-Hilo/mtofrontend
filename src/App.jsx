import { Routes, Route } from "react-router-dom";
import LogIn from "./Containers/LogIn";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
