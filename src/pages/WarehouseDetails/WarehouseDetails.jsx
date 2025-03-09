import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/chevron_right-24px.svg";
import EditItem from "../../assets/icons/edit-24px.svg";
import DeleteItem from "../../assets/icons/delete_outline-24px.svg";
import SortImage from "../../assets/icons/sort-24px.svg";
import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo.jsx";
/* import "./WarehouseDetails.scss"; */
import { useParams } from "react-router-dom";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory.jsx";
import { useEffect, useState } from "react";
import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal.jsx";
import axios from "axios";

function WarehouseDetails({ baseUrl, PORT }) {
  const id = useParams().id;
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [inventories, setInventories] = useState([]);

  const handleDeleteClick = (item) => {
    setClickedItem(item);
    setShowDelete(!showDelete);
  };
  console.log(clickedItem);

  useEffect(() => {
    const getWarehouseInventory = async () => {
      try {
        const response = await axios.get(
          `${baseUrl + PORT}/api/warehouses/${id}/inventories`
        );
        setInventories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(`Unable to retrieve inventories for warehouse ${id}`);
      }
    };
    getWarehouseInventory();
  }, []);

  return (
    <div className="warehouse-details">
      {showDelete && clickedItem && (
        <InventoryDeleteModal
          setShowDelete={setShowDelete}
          inventoryList={inventories}
          setInventoryList={setInventories}
          item={clickedItem}
        />
      )}
      <WarehouseInfo baseUrl={baseUrl} PORT={PORT} id={id} />
      <WarehouseInventory
        baseUrl={baseUrl}
        PORT={PORT}
        id={id}
        handleDeleteClick={handleDeleteClick}
        inventories={inventories}
      />
    </div>
  );
}

export default WarehouseDetails;
