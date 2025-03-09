import "./InventoryAddItem.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import loadWarehouses from "../../utils/FetchWarehousesList/FetchWarehousesList.jsx";

const VITE_SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

function InventoryAddItem() {
  const formRef = useRef();
  const [warehouseList, setWarehouseList] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const getWarehouses = async () => {
      const response = await loadWarehouses(`/api/warehouses`);
      setWarehouseList(response);
    };
    getWarehouses();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const path = `${VITE_SERVER_BASE_URL}:${VITE_SERVER_PORT}/api/inventories/category`;
      try {
        const response = await axios.get(path);
        if (JSON.stringify(response.data) !== JSON.stringify(categoryList)) {
          setCategoryList(response.data); // Update only if data is different
        }
      } catch (error) {
        console.error("Unable get all categories:", error);
        throw error;
      }
    };
    getCategories();
  }, [categoryList]);

  const addInventory = async (e) => {
    e.preventDefault();

    // try {
    const { item_name, description, category, status, quantity } =
      formRef.current;
    console.log(quantity.defaultValue);

    const path = `${VITE_SERVER_BASE_URL}:${VITE_SERVER_PORT}/api/inventories`;
    const response = await axios.post(path, {
      item_name: item_name.value,
      description: description.value,
      category: category.value,
      status: status.value,
      quantity: quantity.value,
      warehouse_id: selectedWarehouse,
    });
    // if (response.status === 201) {
    //   window.location.href = "/inventory";
    // }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(quantity.value);
  };

  return (
    <main className="inventory-add">
      <header className="inventory-add__header-container">
        <div className="inventory-add__header">
          <button className="inventory-add__back-button">
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
            </Link>
          </button>
          <h2 className="inventory-add__component-header">
            Add New Inventory Item
          </h2>
        </div>
      </header>
      <article className="inventory-add__body">
        <form
          className="inventory-add-form"
          onSubmit={addInventory}
          ref={formRef}
          id="add-form"
        >
          <div className="inventory-add-form__main">
            <section className="inventory-add-form__main--container inventory-add-form__main--container1">
              <h3 className="inventory-add-form__headers">Item Details</h3>
              <label htmlFor="item-name" className="inventory-add-form__label">
                Item Name
              </label>
              <input
                type="text"
                id="item-name"
                name="item_name"
                placeholder="Item Name"
                className="inventory-add-form__input inventory-add-form__input--text"
              />
              <label
                htmlFor="description"
                className="inventory-add-form__label"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Please enter a brief item description..."
                className="inventory-add-form__input inventory-add-form__input--textarea"
              ></textarea>
              <label htmlFor="category" className="inventory-add-form__label">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="inventory-add-form__input inventory-add-form__input--select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option></option>
                {categoryList.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </section>
            <section className="inventory-add-form__main--container inventory-add-form__main--container2">
              <h3 className="inventory-add-form__headers">Item Availability</h3>
              <label htmlFor="status" className="inventory-add-form__label">
                Status
              </label>
              <div className="inventory-add-form__radio-group">
                <div className="inventory-add-form__radio-group--separation">
                  <input
                    type="radio"
                    id="in-stock"
                    name="status"
                    className="inventory-add-form__input inventory-add-form__input--radio"
                    value="In Stock"
                  />
                  <label
                    htmlFor="in-stock"
                    className="inventory-add-form__radio-label"
                  >
                    In Stock
                  </label>
                </div>
                <div className="inventory-add-form__radio-group--separation">
                  <input
                    type="radio"
                    id="out-of-stock"
                    name="status"
                    className="inventory-add-form__input inventory-add-form__input--radio"
                    value="Out of Stock"
                  />
                  <label
                    htmlFor="out-of-stock"
                    className="inventory-add-form__radio-label"
                  >
                    Out of Stock
                  </label>
                </div>
              </div>
              <div className="inventory-add-form__input-wrapper">
                <label htmlFor="quantity" className="inventory-add-form__label">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // defaultValue="0"
                  className="inventory-add-form__input inventory-add-form__input--text"
                />
              </div>
              <label htmlFor="warehouse" className="inventory-add-form__label">
                Warehouse
              </label>
              <select
                name="warehouse"
                id="warehouse"
                className="inventory-add-form__input inventory-add-form__input--select"
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
              >
                <option value=""></option>
                {warehouseList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.warehouse_name}
                  </option>
                ))}
              </select>
            </section>
          </div>
        </form>
      </article>
      <div className="inventory-add-form__button-group">
        <div className="inventory-add-form__button-group--container">
          <Link to="/inventory" className="btn btn__cancel">
            Cancel
          </Link>
          <button type="submit" form="add-form" className="btn btn__save">
            + Add Item
          </button>
        </div>
      </div>
    </main>
  );
}

export default InventoryAddItem;
