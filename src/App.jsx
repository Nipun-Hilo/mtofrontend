import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import DashBoard from "./Containers/DashBoard";
import Customer from "./Containers/Customer";
import Catalogue from "./Containers/Catalogue";
import CatalogueDetails from "./Containers/CatalogueDetails"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CustomerDetails from "./Containers/CustomerDetails/CustomerDetails";
import Orders from "./Containers/Orders/Orders";
import VendorOrder from "./Containers/VendorOrders/VendorOrder";
import Production from "./Containers/Production/Production";

import LogIn from "./Containers/LogIn";
import { useEffect } from "react";
import ProductionDetails from "./Containers/ProductionDetails/ProductionDetails";
function App() {
  const navigate = useNavigate();



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/dashboard")
    }
    return;
  }, [])


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

        <Route exact path="/orders" element={<PrivateRoute>
          <Orders />
        </PrivateRoute>} />
        <Route exact path="/vendororders" element={<PrivateRoute>
          <VendorOrder />
        </PrivateRoute>} />
        <Route exact path="/production" element={<PrivateRoute>
          <Production />
        </PrivateRoute>} />
        <Route exact path="/production/:order_id" element={<PrivateRoute>
          <ProductionDetails />
        </PrivateRoute>} />

      </Routes>
    </div>
  );
}

export default App;
