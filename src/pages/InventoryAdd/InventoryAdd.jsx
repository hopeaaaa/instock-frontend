import "./InventoryAdd.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import loadWarehouses from "../../utils/FetchWarehousesList/FetchWarehousesList";

const VITE_SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

function InventoryAdd() {
  const [WarehouseList, setWarehouseList] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("Manhattan");
  const formRef = useRef();

  // const handleWarehouseSelection

  useEffect(() => {
    const getWarehouses = async () => {
      const response = await loadWarehouses(`/warehouse`);
      setWarehouseList(response);
    };
    getWarehouses();
  }, []);

  const addInventory = async (e) => {
    e.preventDefault();
    const { item_name, description, category, status, quantity } =
      formRef.current;

    const path = `${VITE_SERVER_BASE_URL}:${VITE_SERVER_PORT}/inventory/api/inventories`;
    const response = await axios.post(path, {
      item_name: item_name.value,
      description: description.value,
      category: category.value,
      status: status.value,
      quantity: quantity.value,
      warehouse_id: selectedWarehouse,
    });
  };

  return (
    <>
      <div className="add-inventory-page__header">
        <h2>
          <Link to="/inventory">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="#2E66E6"
              />
            </svg>
            Add New Inventory Item
          </Link>
        </h2>
      </div>
      <form
        className="add-inventory-form"
        onSubmit={addInventory}
        ref={formRef}
      >
        <div className="add-inventory-form__wrapper">
          <hr className="add-inventory-form__horizontal-line"></hr>
          <h3 className="add-inventory-form__header">Item Details</h3>
          <div className="add-inventory-form__item-details">
            <div className="add-inventory-form__input-wrapper">
              <label
                htmlFor="add-inventory-form__item-details"
                className="add-inventory-form__label"
              >
                Item Name
              </label>
              <input
                type="text"
                name="item_name"
                placeholder="Item Name"
                className="add-inventory-form__input"
                id="add-inventory-form__item-name"
              />
            </div>
            <div className="add-inventory-form__input-wrapper">
              <label
                htmlFor="add-inventory-form__description"
                className="add-inventory-form__label"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Please enter a brief item description..."
                className="add-inventory-form__input"
                id="add-inventory-form__description"
              />
            </div>
            <div className="add-inventory-form__input-wrapper">
              <label
                htmlFor="add-inventory-form__category"
                className="add-inventory-form__label"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Please select"
                className="add-inventory-form__input"
                id="add-inventory-form__category"
              />
            </div>
          </div>
        </div>
        <div className="add-inventory-form__wrapper">
          <hr className="add-inventory-form__horizontal-line"></hr>
          <h3 className="add-inventory-form__header">Item Availability</h3>
          <div className="add-inventory-form__item-availability">
            <div className="add-inventory-form__checkbox-wrapper">
              <label
                htmlFor="add-inventory-form__status"
                className="add-inventory-form__label"
              >
                Status
              </label>
              <div className="add-inventory-form__checkbox-options">
                <fieldset>
                  <input
                    type="checkbox"
                    name="status1"
                    placeholder="Status"
                    className="add-inventory-form__checkbox"
                    id="add-inventory-form__status"
                    value="In Stock"
                  />
                  <input
                    type="checkbox"
                    name="status"
                    placeholder="Status"
                    className="add-inventory-form__checkbox"
                    id="add-inventory-form__status"
                    value="Out of Stock"
                  />
                </fieldset>
              </div>
            </div>
            <div className="add-inventory-form__input-wrapper">
              <label
                htmlFor="add-inventory-form__quantity"
                className="add-inventory-form__label"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="0"
                className="add-inventory-form__input"
                id="add-inventory-form__quantity"
              />
            </div>
            <div className="add-inventory-form__input-wrapper">
              <label
                htmlFor="add-inventory-form__warehouse"
                className="add-inventory-form__label"
              >
                Warehouse
              </label>
              <select
                name="warehouse"
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
              >
                <option value=""></option>
                {WarehouseList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.warehouse_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="add-inventory-form__CTA">
          <Link to="/">
            <button className="add-inventory-form__cancel">Cancel</button>
          </Link>
          <button type="submit" className="add-inventory-form__submit">
            + Add Inventory
          </button>
        </div>
      </form>
    </>
  );
}

export default InventoryAdd;
