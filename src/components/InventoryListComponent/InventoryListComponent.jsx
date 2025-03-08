import "./InventoryListComponent.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function InventoryListComponent({ handleDeleteClick , inventoryList}) {

  return (
    <div className="inventory-list">
      <div className="inventory-list__header">
        <h1 className="inventory-list__title">Inventory</h1>
        <div className="inventory-list__cta">
          <input
            className="inventory-list__search-input"
            placeholder="Search"
          />
          <button className="inventory-list__add-button">
            <Link to={"/inventory/add"}>+ Add New Item</Link>
          </button>
        </div>
      </div>
      <div className="inventory-list__item-wrapper">
        <div className="inventory-list__item inventory-list__item--subheader">
          <div className="inventory-list__details">
            <div className="inventory-list__detail">
              {" "}
              <h4 className="inventory-list__column-header">
                INVENTORY ITEM{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </h4>
            </div>
            <div className="inventory-list__detail">
              {" "}
              <h4 className="inventory-list__column-header">
                CATEGORY{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="inventory-list__details">
            <div className="inventory-list__detail">
              <h4 className="inventory-list__column-header">
                STATUS{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </h4>
            </div>
            <div className="inventory-list__detail">
              <h4 className="inventory-list__column-header">
                QTY{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </h4>
            </div>
            <div className="inventory-list__detail">
              <h4 className="inventory-list__column-header">
                WAREHOUSE{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                    fill="#5C667E"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="inventory-list__actions">
            <h4 className="inventory-list__column-header">
              ACTIONS{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                  fill="#5C667E"
                />
              </svg>
            </h4>
          </div>
        </div>
      </div>
      {inventoryList.map((item) => (
        <div key={item.id} className="inventory-list__item-wrapper">
          <hr className="inventory-list__horizontal-line" />
          <div className="inventory-list__item">
            <div className="inventory-list__details">
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">INVENTORY ITEM</h3>
                <ul>
                  <li>
                    <Link
                      to={`/inventory/${item.id}`}
                      className="inventory-list__item-name"
                    >
                      {item.item_name}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                          fill="#2E66E6"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">CATEGORY</h3>
                <ul>
                  <li className="inventory-list__text">{item.category}</li>
                </ul>
              </div>
            </div>
            <div className="inventory-list__details">
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">STATUS</h3>
                <ul>
                  <li className="inventory-list__status">{item.status}</li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">QTY</h3>
                <ul>
                  <li
                    // key={`item-quantity-${item.id}`}
                    className="inventory-list__text"
                  >
                    {item.quantity}
                  </li>
                </ul>
              </div>
              <div className="inventory-list__detail">
                <h3 className="inventory-list__label">WAREHOUSE</h3>
                <ul>
                  <li
                    //   key={`item-city`}
                    className="inventory-list__text"
                  >
                    Manhattan
                  </li>
                </ul>
              </div>
            </div>
            <div className="inventory-list__actions">
              <h3 className="inventory-list__label">Actions</h3>
              <div className="inventory-list__action-icons">
                <button onClick={() => handleDeleteClick(item)}>
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
                </button>
                <Link to={`/inventory/${item.id}/edit`}>
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
                </Link>
              </div>
            </div>
          </div>
          <div className="inventory-list__hidden">
            <button onClick={() => handleDeleteClick(item)}>
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
            </button>
            <Link to={`/inventory/${item.id}/edit`}>
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
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InventoryListComponent;
