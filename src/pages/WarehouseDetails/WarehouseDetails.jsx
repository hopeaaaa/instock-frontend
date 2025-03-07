import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/chevron_right-24px.svg";
import EditItem from "../../assets/icons/edit-24px.svg";
import DeleteItem from "../../assets/icons/delete_outline-24px.svg";
import SortImage from "../../assets/icons/sort-24px.svg";
import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo.jsx";
import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory.jsx";

function WarehouseDetails({ baseUrl, PORT }) {
  const id = useParams().id;
  return (
    <div className="warehouse-details">
      <WarehouseInfo baseUrl={baseUrl} PORT={PORT} id={id} />
      <WarehouseInventory baseUrl={baseUrl} PORT={PORT} id={id} />
    </div>
  );
}

export default WarehouseDetails;
