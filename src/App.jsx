import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WarehouseList from "./pages/WarehouseList/WarehousesList.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";
import InventoryList from "./pages/InventoryList/InventoryList.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";

function App() {
  const baseUrl = `${import.meta.env.VITE_SERVER_BASE_URL}:`;
  const PORT = import.meta.env.VITE_SERVER_PORT;

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/warehouse" element={<WarehouseList />} />
        <Route
          path="/warehouse/:id"
          element={<WarehouseDetails baseUrl={baseUrl} PORT={PORT} />}
        />
        <Route
          path="/warehouse/add"
          element={<WarehouseAdd baseUrl={baseUrl} PORT={PORT} />}
        />
        <Route path="/warehouse/:id/edit" element={<WarehouseEdit />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/inventory/:id" element={<InventoryDetails />} />
        <Route path="/inventory/add" element={<InventoryAdd />} />
        <Route path="/inventory/:id/edit" element={<InventoryEdit />} />
        <Route path="/" element={<WarehouseList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
