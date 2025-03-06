import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";
import "./InventoryList.scss";
import InventoryListComponent from "../../components/InventoryListComponent/InventoryListComponent.jsx";
import { useState, useEffect } from "react";
function InventoryList() {
  // const [inventoryList, setInventoryList] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(null); 

  const handleDeleteClick = (item)=>{
    setClickedItem(item);
    setShowDelete(!showDelete);
  }
console.log(clickedItem)
  return (
    <>
    {showDelete && clickedItem && <InventoryDeleteModal setShowDelete={setShowDelete} item={clickedItem}/>}
    <InventoryListComponent handleDeleteClick={handleDeleteClick}/>
    </>
      );
}

export default InventoryList;
