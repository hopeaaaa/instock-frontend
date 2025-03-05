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
          <input className="inventory-list__search-input" />
          <button className="inventory-list__add-button">+ Add New Item</button>
        </div>
      </div>
      <div className="inventory-list__subheaders">
        <h4 className="inventory-list__column-header">Inventory Item</h4>
        <h4 className="inventory-list__column-header">Category</h4>
        <h4 className="inventory-list__column-header">Status</h4>
        <h4 className="inventory-list__column-header">QTY</h4>
        <h4 className="inventory-list__column-header">Inventory Item</h4>
      </div>
      {inventoryList.map((item) => (
        <div className="inventory-list__item-wrapper">
          <div className="inventory-list__item">
            <div className="inventory-list_details">
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
            <div className="inventory-list_warehouse-info">
              <div>
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
              <div>
                <h3 className="inventory-list__label">WAREHOUSE</h3>
                <ul>
                  <li className="inventory-list__text">Manhattan</li>
                </ul>
              </div>
            </div>
            <div className="inventory-list__actions">
              <h3 className="inventory-list__label">Actions</h3>
              <div className="inventory-list__action-icons">
                <span className="inventory-list__icon">image</span>
                <span className="inventory-list__icon">image</span>
              </div>
            </div>
          </div>
          <div className="inventory-list__actions--hidden">
            <span className="inventory-list__icon">image</span>
            <span className="inventory-list__icon">image</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default InventoryList;
