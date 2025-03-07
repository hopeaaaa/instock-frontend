import { useState } from "react";
import WarehouseDeleteModal from "../../components/WarehouseDeleteModal/WarehouseDeleteModal";
import WarehouseListComponent from "../../components/WarehouseListComponent/WarehouseListComponent";
import { useParams } from "react-router-dom";

function WarehouseList() {
  const { warehouseData } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setClickedItem(item);
    setShowDelete(!showDelete);
  };

  return (
    <>
     {showDelete && clickedItem && (
        <WarehouseDeleteModal
          setShowDelete={setShowDelete}
          item={clickedItem}
        />
      )}
      <WarehouseListComponent warehouseData={warehouseData} handleDeleteClick={handleDeleteClick}/>
    </>
  );
}

export default WarehouseList;
