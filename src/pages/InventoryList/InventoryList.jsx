import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";
import "./InventoryList.scss";
import InventoryListComponent from "../../components/InventoryListComponent/InventoryListComponent.jsx";
import { useState, useEffect } from "react";
function InventoryList() {
  // const [inventoryList, setInventoryList] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(); 

  const handleDeleteClick = (item)=>{
    setClickedItem(item);
    setShowDelete(!showDelete);
  }


 
  return (
    <>
    {showDelete && <InventoryDeleteModal setShowDelete={setShowDelete} item={clickedItem}/>}
    <InventoryListComponent handleDeleteClick={handleDeleteClick}/>
    </>
      );
}

export default InventoryList;
