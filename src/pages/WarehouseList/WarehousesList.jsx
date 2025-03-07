import WarehouseListComponent from "../../components/WarehouseListComponent/WarehouseListComponent";
import { useParams } from "react-router-dom";

function WarehouseList() {
  const { warehouseData } = useParams();

  return <WarehouseListComponent warehouseData={warehouseData} />;
}

export default WarehouseList;
