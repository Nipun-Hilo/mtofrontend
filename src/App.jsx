import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import DashBoard from "./Containers/DashBoard";
import Customer from "./Containers/Customer";
import Catalogue from "./Containers/Catalogue";
import CatalogueDetails from "./Containers/CatalogueDetails"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CustomerDetails from "./Containers/CustomerDetails/CustomerDetails";

import LogIn from "./Containers/LogIn";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/dashboard" element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        } />
        <Route exact path="/customer" element={<PrivateRoute>
          <Customer />
        </PrivateRoute>} />
        <Route exact path="/catalogue" element={<PrivateRoute>
          <Catalogue />
        </PrivateRoute>} />
        <Route exact path="/catalogue/:product_id" element={<PrivateRoute>
          <CatalogueDetails />
        </PrivateRoute>} />
        <Route exact path="/customers/:customer_id" element={<PrivateRoute>
          <CustomerDetails />
        </PrivateRoute>} />


      </Routes>
    </div>
  );
}

export default App;
