import "./InventoryEditItem.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function InventoryEditItem() {
  const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
  const param = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [warehouseList, setWarehouseList] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const path = `${BASE_URL}/api/inventories/${param.id}`;
    try {
      const response = await axios.put(path, {
        id: param.id,
        item_name: name,
        description,
        category,
        status: stockStatus,
        quantity,
        warehouse_id: warehouse,
      });
      if (response.status === 200) {
        window.location.href = "/inventory";
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  useEffect(() => {
    const getInventoryDetails = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/inventories/${param.id}`
        );
        setName(data.item_name);
        setDescription(data.description);
        setCategory(data.category);
        setStockStatus(data.status);
        setQuantity(data.quantity);
        setWarehouse(data.warehouse_id);
      } catch (error) {
        console.error("Unable to get inventory by id:", error);
      }
    };
    getInventoryDetails();
  }, [param.id, BASE_URL]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/inventories/category`
        );
        setCategoryList(data);
      } catch (error) {
        console.error("Unable to get categories:", error);
      }
    };
    getCategories();
  }, [BASE_URL]);

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/warehouses`);
        setWarehouseList(data);
      } catch (error) {
        console.error("Unable to get warehouses:", error);
      }
    };
    getWarehouses();
  }, [BASE_URL]);

  return (
    <main className="inventory-edit">
      <header className="inventory-edit__header-container">
        <div className="inventory-edit__header">
          <Link to="/inventory" className="inventory-edit__back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="#2E66E6"
              />
            </svg>
          </Link>
          <h1 className="inventory-edit__item-header">Edit Inventory Item</h1>
        </div>
      </header>

      <article className="inventory-edit__body">
        <form
          className="inventory-edit__form"
          id="edit-form"
          onSubmit={onSubmitForm}
        >
          <div className="edit-form__main">
            {/* Item Details */}
            <section className="edit-form__main--container">
              <h2 className="edit-form__headers">Item Details</h2>

              <label htmlFor="item-name" className="edit-form__title">
                Item Name
              </label>
              <input
                type="text"
                id="item-name"
                name="item_name"
                className="edit-form__input edit-form__input--text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="description" className="edit-form__title">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="edit-form__input edit-form__input--textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="category" className="edit-form__title">
                Category
              </label>
              <select
                id="category"
                className="edit-form__input edit-form__input--select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryList.map((cat, i) => (
                  <option key={i} value={cat.category}>
                    {cat.category}
                  </option>
                ))}
              </select>
            </section>

            <section className="edit-form__main--container">
              <h2 className="edit-form__headers">Item Availability</h2>

              <label className="edit-form__title">Status</label>
              <div className="edit-form__radio-group">
                <div>
                  <input
                    id="in-stock"
                    type="radio"
                    name="status"
                    value="In Stock"
                    checked={stockStatus === "In Stock"}
                    onChange={(e) => setStockStatus(e.target.value)}
                  />
                  <label htmlFor="in-stock">In Stock</label>
                </div>
                <div>
                  <input
                    id="out-of-stock"
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    checked={stockStatus === "Out of Stock"}
                    onChange={(e) => setStockStatus(e.target.value)}
                  />
                  <label htmlFor="out-of-stock">Out of Stock</label>
                </div>
              </div>

              {stockStatus === "In Stock" && (
                <div>
                  <label htmlFor="item-quantity" className="edit-form__title">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="item-quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              )}

              <label htmlFor="warehouse" className="edit-form__title">
                Warehouse
              </label>
              <select
                id="warehouse"
                className="edit-form__input edit-form__input--select"
                value={warehouse}
                onChange={(e) => setWarehouse(e.target.value)}
              >
                <option value="">----</option>
                {warehouseList.map((ware, i) => (
                  <option key={i} value={ware.id}>
                    {ware.warehouse_name}
                  </option>
                ))}
              </select>
            </section>
          </div>
        </form>
      </article>

      <div className="edit-form__button-group">
        <Link to={"/inventory"} className="btn btn__cancel">
          Cancel
        </Link>
        <button type="submit" form="edit-form" className="btn btn__save">
          Save
        </button>
      </div>
    </main>
  );
}

export default InventoryEditItem;
