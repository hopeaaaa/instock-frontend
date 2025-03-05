import "./InventoryList.scss";
import { useEffect, useState } from "react";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);

  function fetchInventory() {
    fetch("/inventory.json")
      .then((response) => response.json())
      .then((data) => setInventoryList(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <>
      <div className="inventory-list__header">
        <h1 className="inventory-list__title">Inventory</h1>
        <div className="inventory-list__cta">
          <input
            className="inventory-list__search-input"
            placeholder="Search"
          />
          <button className="inventory-list__add-button">+ Add New Item</button>
        </div>
      </div>
      <div className="inventory-list__subheaders">
        <h4 className="inventory-list__column-header">Inventory Item</h4>
        <h4 className="inventory-list__column-header">Category</h4>
        <h4 className="inventory-list__column-header">Status</h4>
        <h4 className="inventory-list__column-header">QTY</h4>
        <h4 className="inventory-list__column-header">Warehouse</h4>
        <h4 className="inventory-list__column-header">Actions</h4>
      </div>
      {inventoryList.map((item) => (
        <div className="inventory-list__item-wrapper">
          <hr className="inventory-list__horizontal-line" />
          <div className="inventory-list__item">
            <div className="inventory-list__details">
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">Inventory Item</h3>
                <ul>
                  <li className="inventory-list__item-name">
                    {item.item_name}
                  </li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">Category</h3>
                <ul>
                  <li className="inventory-list__text">{item.category}</li>
                </ul>
              </div>
            </div>
            <div className="inventory-list__details">
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">Status</h3>
                <ul>
                  <li className="inventory-list__status">{item.status}</li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">QTY</h3>
                <ul>
                  <li className="inventory-list__text">{item.quantity}</li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">WAREHOUSE</h3>
                <ul>
                  <li className="inventory-list__text">Manhattan</li>
                </ul>
              </div>
            </div>
            <div className="inventory-list__actions">
              <h3 className="inventory-list__label">Actions</h3>
              <div className="inventory-list__action-icons">
                <svg
                  className="inventory-list__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                    fill="#C94515"
                  />
                </svg>
                <svg
                  className="inventory-list__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                    fill="#2E66E6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="inventory-list__hidden">
            <svg
              className="inventory-list__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                fill="#C94515"
              />
            </svg>
            <svg
              className="inventory-list__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                fill="#2E66E6"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default InventoryList;
