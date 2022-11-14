import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import DashBoard from "./Containers/DashBoard";
import LogIn from "./Containers/LogIn";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
