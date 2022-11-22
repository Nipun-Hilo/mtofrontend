import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import DashBoard from "./Containers/DashBoard";
import Customer from "./Containers/Customer";
import Catalogue from "./Containers/Catalogue";
import CatalogueDetails from "./Containers/CatalogueDetails"
import CatalogueDesc from "./Containers/CatalogueDesc"
import CatalogueVariants from "./Containers/CatalogueVariants";
import LogIn from "./Containers/LogIn";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/customer" element={<Customer />} />
        <Route exact path="/catalogue" element={<Catalogue />} />
        <Route exact path="/catalogue-details" element={<CatalogueDetails />} />
        <Route exact path="/cataloguedesc" element={<CatalogueDesc />} />
        <Route exact path="/cataloguevariants" element={<CatalogueVariants />} />
      </Routes>
    </div>
  );
}

export default App;
