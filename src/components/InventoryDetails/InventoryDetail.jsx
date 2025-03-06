import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./InventoryDetail.scss";
import axios from "axios";

const InventoryDetail = () => {
  const param = useParams();
  const [data, setData] = useState({});
  const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
  const PORT = import.meta.env.VITE_SERVER_PORT;
  useEffect(() => {
    const getInventoryDetails = async () => {
      const path = `${BASE_URL}:${PORT}/inventory/${param.id}`;
      try {
        const response = await axios.get(path);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Unable get inventory by id:", error);
        throw error;
      }
    };
    getInventoryDetails();
    console.log(data);
  }, []);

  let stockClassName =
    data.status !== "Out of Stock" ? "in-stock" : "out-of-stock";
  console.log(stockClassName);
  return (
    <main className="inventory-details">
      <div className="inventory-details__header-container">
        <header className="inventory-details__header">
          <div className="inventory-details__header--divider">
            <Link to="/inventory">
              <button className="inventory-details__back-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                    fill="#2E66E6"
                  />
                </svg>
              </button>
            </Link>
            <h1 className="inventory-details__item-name">{data.item_name}</h1>
          </div>
          <button className="inventory-details__edit-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="inventory-details__edit-button--icon"
            >
              <path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                fill="#FFFFFF"
              />
            </svg>
            <p className="inventory-details__edit-button--text">Edit</p>
          </button>
        </header>
      </div>
      <article className="inventory-details__body">
        <div className="separation-container">
          <div className="inventory-details__section">
            <h2 className="inventory-details__title">ITEM DESCRIPTION:</h2>
            <p className="inventory-details__description">{data.description}</p>
          </div>
          <div className="inventory-details__section">
            <h2 className="inventory-details__title">CATEGORY:</h2>
            <p className="inventory-details__description">{data.category}</p>
          </div>
        </div>
        <div className="inventory-details__separation-container">
          <div className="inventory-details__section inventory-details__section--column">
            <div className="inventory-details__status">
              <div className="inventory-details__section">
                <h2 className="inventory-details__title">STATUS:</h2>
                <p
                  className={
                    "inventory-details__description inventory-details__description--" +
                    stockClassName
                  }
                >
                  {data.status}
                </p>
              </div>
            </div>
            <div className="inventory-details__section">
              <div className="inventory-details__quantity">
                <h2 className="inventory-details__title">QUANTITY:</h2>
                <p className="inventory-details__description">
                  {data.quantity}
                </p>
              </div>
            </div>
          </div>
          <div className="inventory-details__section">
            <h2 className="inventory-details__title">WAREHOUSE:</h2>
            <p className="inventory-details__description">
              {data.warehouse_id}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default InventoryDetail;
