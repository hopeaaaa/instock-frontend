import { Link } from "react-router-dom";
import RightArrow from "../../assets/icons/chevron_right-24px.svg";
import EditItem from "../../assets/icons/edit-24px.svg";
import DeleteItem from "../../assets/icons/delete_outline-24px.svg";
import SortImage from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import InventoryDeleteModal from "../InventoryDeleteModal/InventoryDeleteModal";
import { useEffect, useState } from "react";

function WarehouseInventory({ baseUrl, PORT, id, handleDeleteClick }) {
  const [inventories, setInventories] = useState([]);
  const getWarehouseInventory = async () => {
    try {
      const response = await axios.get(
        `${baseUrl + PORT}/warehouse/${id}/inventories`
      );
      setInventories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Unable to retrieve inventories for warehouse ${id}`);
    }
  };
  useEffect(() => {
    getWarehouseInventory();
  }, [inventories]);
  return (
    <>
      <ul className="warehouse-details__tablet-filter">
        <li className="warehouse-details__tablet-label">
          <h5 className="warehouse-details__tablet-name">INVENTORY ITEM</h5>
          <img
            src={SortImage}
            alt="Image to Filter based on Name"
            className="warehouse-details__sort-image"
          />
        </li>
        <li className="warehouse-details__tablet-label">
          <h5 className="warehouse-details__tablet-name">CATEGORY</h5>
          <img
            src={SortImage}
            alt="Image to Filter based on Category"
            className="warehouse-details__sort-image"
          />
        </li>
        <li className="warehouse-details__tablet-label">
          <h5 className="warehouse-details__tablet-name">STATUS</h5>
          <img
            src={SortImage}
            alt="Image to Filter based on Inventory Status"
            className="warehouse-details__sort-image"
          />
        </li>
        <li className="warehouse-details__tablet-label">
          <h5 className="warehouse-details__tablet-name">QUANTITY</h5>
          <img
            src={SortImage}
            alt="Image to Filter based on Inventory Quantity"
            className="warehouse-details__sort-image"
          />
        </li>
        <li className="warehouse-details__tablet-label">
          <h5 className="warehouse-details__tablet-name">ACTIONS</h5>
        </li>
      </ul>
      {inventories.map((item) => {
        return (
          <div className="warehouse-details__inventory" key={item.id}>
            <div className="warehouse-details__item warehouse-details__item-info">
              <h5 className="warehouse-details__label--mobile">
                INVENTORY ITEM
              </h5>
              <Link
                to={`/inventory/${item.id}`}
                className="warehouse-details__item-redirect"
              >
                <p className="warehouse-details__item-input">
                  {item.item_name}
                </p>
                <img
                  src={RightArrow}
                  alt="Arrow to Navigate to Item Detail Page"
                  className="warehouse-details__arrow-image"
                />
              </Link>
            </div>
            <div className="warehouse-details__category warehouse-details__item-info">
              <h5 className="warehouse-details__label--mobile">CATEGORY</h5>
              <p className="warehouse-details__item-input">{item.category}</p>
            </div>
            <div className="warehouse-details__status warehouse-details__item-info">
              <h5 className="warehouse-details__label--mobile">STATUS</h5>
              <p className="warehouse-details__item-input">{item.status}</p>
            </div>
            <div className="warehouse-details__quantity warehouse-details__item-info">
              <h5 className="warehouse-details__label--mobile">QUANTITY</h5>
              <p className="warehouse-details__item-input">{item.quantity}</p>
            </div>

            <div className="warehouse-details__actions">
              {/* <Link to={InventoryDeleteModal}> */}
              <button onClick={()=>handleDeleteClick(item)}>
              <img
                src={DeleteItem}
                alt="Delete this Item Image"
                className="warehouse-details__item-delete"
              />
              </button>
              {/* </Link> */}
              <Link to={`/inventory/${id}/edit`}>
                <img
                  src={EditItem}
                  alt="Edit this Item Image"
                  className="warehouse-details__item-edit"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WarehouseInventory;
