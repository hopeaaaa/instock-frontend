import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";
import "./InventoryList.scss";
import InventoryListComponent from "../../components/InventoryListComponent/InventoryListComponent.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryList() {

  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [inventoryList, setInventoryList] = useState([]);

  const VITE_SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

  const handleDeleteClick = (item) => {
    setClickedItem(item);
    setShowDelete(!showDelete);
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          `${VITE_SERVER_BASE_URL}:${VITE_SERVER_PORT}/inventory`
        );
        setInventoryList(response.data);
      } catch (error) {
        console.log("Error fetching inventory:", error);
      }
    };
    fetchInventory();
  }, []);
  

  return (
    <>
      {showDelete && clickedItem && (
        <InventoryDeleteModal
          setShowDelete={setShowDelete}
          setInventoryList={setInventoryList}
          inventoryList={inventoryList}
          item={clickedItem}
        />
      )}
      <InventoryListComponent handleDeleteClick={handleDeleteClick} inventoryList={inventoryList} />
    </>
  );
}

export default InventoryList;
