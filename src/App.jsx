import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WarehousesPage from "./pages/Warehouses/WarehousesPage.jsx";
import InventoryPage from "./pages/Inventory/InventoryPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
