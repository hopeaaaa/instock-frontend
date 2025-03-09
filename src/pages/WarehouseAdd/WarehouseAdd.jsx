import AddWarehouseForm from "../../components/AddWarehouseForm/AddWarehouseForm.jsx";
import BackButton from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseAdd.scss";

function WarehouseAdd({ baseUrl, PORT }) {
  return (
    <div className="warehouse-add">
      <div className="warehouse-add__header">
        <Link to="/warehouse">
          <img
            src={BackButton}
            alt="Back Button to Home Page"
            className="warehouse-add__back-button"
          />
        </Link>
        <h2 className="warehouse-add__name">Add New Warehouse</h2>
      </div>
      <AddWarehouseForm baseUrl={baseUrl} PORT={PORT} />
    </div>
  );
}

export default WarehouseAdd;
