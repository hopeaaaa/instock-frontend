import { useState, useEffect } from "react";
import WarehouseDeleteModal from "../../components/WarehouseDeleteModal/WarehouseDeleteModal";
import WarehouseListComponent from "../../components/WarehouseListComponent/WarehouseListComponent";
import { useParams } from "react-router-dom";
import loadWarehouses from "../../utils/FetchWarehousesList/FetchWarehousesList";

function WarehouseList() {
  const { warehouseData } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [warehouseList, setWarehouseList] = useState([]);
  const handleDeleteClick = (item) => {
    setClickedItem(item);
    setShowDelete(!showDelete);
  };

  useEffect(() => {
    const getWarehouses = async () => {
      const response = await loadWarehouses("/api/warehouses");
      setWarehouseList(response);
    };
    getWarehouses();
  }, []);

  return (
    <>
     {showDelete && clickedItem && (
        <WarehouseDeleteModal
          setShowDelete={setShowDelete}
          item={clickedItem}
          warehouseList={warehouseList} setWarehouseList={setWarehouseList}
        />
      )}
      <WarehouseListComponent warehouseData={warehouseData} handleDeleteClick={handleDeleteClick} WarehouseList={warehouseList}/>
    </>
  );
}

export default WarehouseList;
