import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-white-24px.svg";
import axios from "axios";

function WarehouseInfo({ baseUrl, PORT, id }) {
  const [warehouseinfo, setWarehouseInfo] = useState([]);

  const getWarehouseInfo = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}${PORT}/api/warehouses/${id}`
      );
      setWarehouseInfo(response.data);
    } catch (error) {
      console.error(
        "Unable to retrieve information about warehouse, please try again",
        error
      );
    }
  };

  useEffect(() => {
    getWarehouseInfo();
  }, []);

  return (
    <>
      <div className="warehouse-details__header">
        <div className="warehouse-details__header-left">
          <Link to="/">
            <img
              src={BackButton}
              alt="Back Button to Home Page"
              className="warehouse-details__back-button"
            />
          </Link>
          <h2 className="warehouse-details__name">
            {warehouseinfo.warehouse_name}
          </h2>
        </div>
        <Link to={`/${id}/edit`} className="warehouse-details__edit-section">
          <img
            src={EditButton}
            alt="Edit Warehouse Details"
            className="warehouse-details__edit-image"
          />
          <p className="warehouse-details__edit-text">Edit</p>
        </Link>
      </div>
      <div className="warehouse-details__information">
        <div className="warehouse-details__location">
          <h5 className="warehouse-details__label">WAREHOUSE ADDRESS</h5>
          <p className="warehouse-details__input">{warehouseinfo.address}</p>
        </div>
        <div className="warehouse-details__contact">
          <div className="warehouse-details__contact-person">
            <h5 className="warehouse-details__label">CONTACT NAME</h5>
            <p className="warehouse-details__input">
              {warehouseinfo.contact_name}
              <br />
              {warehouseinfo.contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact-info">
            <h5 className="warehouse-details__label">CONTACT INFORMATION</h5>
            <p className="warehouse-details__input">
              {warehouseinfo.contact_phone}
              <br />
              {warehouseinfo.contact_email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarehouseInfo;
