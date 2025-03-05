import { Link } from "react-router-dom";
import BackButton from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-white-24px.svg";
import RightArrow from "../../assets/icons/chevron_right-24px.svg";
import EditItem from "../../assets/icons/edit-24px.svg";
import DeleteItem from "../../assets/icons/delete_outline-24px.svg";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__header">
        <div className="warehouse-details__header-left">
          <Link to="/">
            <img
              src={BackButton}
              alt="Back Button to Home Page"
              className="warehouse-details__back-button"
            />
          </Link>
          <h2 className="warehouse-details__name">warehouse_name</h2>
        </div>
        <div className="warehouse-details__edit-section">
          <img
            src={EditButton}
            alt="Edit Warehouse Details"
            className="warehouse-details__edit-image"
          />
        </div>
      </div>
      <div className="warehouse-details__information">
        <div className="warehouse-details__location">
          <h5 className="warehouse-details__label">WAREHOUSE ADDRESS</h5>
          <p className="warehouse-details__input">address</p>
        </div>
        <div className="warehouse-details__contact">
          <div className="warehouse-details__contact-person">
            <h5 className="warehouse-details__label">CONTACT NAME</h5>
            <p className="warehouse-details__input">
              contact_name
              <br />
              contact_position
            </p>
          </div>
          <div className="warehouse-details__contact-info">
            <h5 className="warehouse-details__label">CONTACT INFORMATION</h5>
            <p className="warehouse-details__input">
              contact_phone
              <br />
              contact_email
            </p>
          </div>
        </div>
      </div>
      {/* map function somewhere here */}
      <div className="warehouse-details__inventory">
        <div className="warehouse-details__item warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">INVENTORY ITEM</h5>
          <Link to="/" className="warehouse-details__item-redirect">
            <p className="warehouse-details__item-input">item_name</p>
            <img
              src={RightArrow}
              alt="Arrow to Navigate to Item Detail Page"
              className="warehouse-details__arrow-image"
            />
          </Link>
        </div>
        <div className="warehouse-details__category warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">CATEGORY</h5>
          <p className="warehouse-details__item-input">category</p>
        </div>
        <div className="warehouse-details__status warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">STATUS</h5>
          <p className="warehouse-details__item-input">status</p>
        </div>
        <div className="warehouse-details__quantity warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">QUANTITY</h5>
          <p className="warehouse-details__item-input">quantity</p>
        </div>

        <div className="warehouse-details__actions">
          <img
            src={DeleteItem}
            alt="Delete this Item Image"
            className="warehouse-details__item-delete"
          />
          <img
            src={EditItem}
            alt="Edit this Item Image"
            className="warehouse-details__item-edit"
          />
        </div>
      </div>
      {/* comment out below as its duplicate */}
      <div className="warehouse-details__inventory">
        <div className="warehouse-details__item warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">INVENTORY ITEM</h5>
          <Link to="/" className="warehouse-details__item-redirect">
            <p className="warehouse-details__item-input">item_name</p>
            <img
              src={RightArrow}
              alt="Arrow to Navigate to Item Detail Page"
              className="warehouse-details__arrow-image"
            />
          </Link>
        </div>
        <div className="warehouse-details__category warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">CATEGORY</h5>
          <p className="warehouse-details__item-input">category</p>
        </div>
        <div className="warehouse-details__status warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">STATUS</h5>
          <p className="warehouse-details__item-input">status</p>
        </div>
        <div className="warehouse-details__quantity warehouse-details__item-info">
          <h5 className="warehouse-details__label--mobile">QUANTITY</h5>
          <p className="warehouse-details__item-input">quantity</p>
        </div>

        <div className="warehouse-details__actions">
          <img
            src={DeleteItem}
            alt="Delete this Item Image"
            className="warehouse-details__item-delete"
          />
          <img
            src={EditItem}
            alt="Edit this Item Image"
            className="warehouse-details__item-edit"
          />
        </div>
      </div>
      {/* comment out above as its duplicate */}
    </div>
  );
}

export default WarehouseDetails;
