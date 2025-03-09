import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WarehouseListComponent.scss";
import loadWarehouses from "../../utils/FetchWarehousesList/FetchWarehousesList";

function WarehouseListComponent({ handleDeleteClick, WarehouseList }) {
  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <div className="warehouse-list__cta">
          <input
            className="warehouse-list__search-input"
            placeholder="Search..."
          />
          <Link to="/warehouse/add">
            <button className="warehouse-list__add-button">
              + Add New Warehouse
            </button>
          </Link>
        </div>
      </div>
      <div className="warehouse-list__item-wrapper">
        <div className="warehouse-list__item warehouse-list__item--subheader">
          <div className="warehouse-list__details">
            <div className="warehouse-list__detail">
              {" "}
              <h4 className="warehouse-list__column-header">Warehouse</h4>
            </div>
            <div className="warehouse-list__detail">
              {" "}
              <h4 className="warehouse-list__column-header">Address</h4>
            </div>
          </div>
          <div className="warehouse-list__details">
            <div className="warehouse-list__detail">
              <h4 className="warehouse-list__column-header">Contact Name</h4>
            </div>
            <div className="warehouse-list__detail">
              <h4 className="warehouse-list__column-header">
                Contact Information
              </h4>
            </div>
          </div>
          <div className="warehouse-list__actions">
            <h4 className="warehouse-list__column-header">Actions</h4>
          </div>
        </div>
      </div>
      {WarehouseList.map((item) => (
        <div key={item.id} className="warehouse-list__item-wrapper">
          <hr className="warehouse-list__horizontal-line" />
          <div className="warehouse-list__item">
            <div className="warehouse-list__details">
              <div className="warehouse-list__detail">
                <h3 className="warehouse-list__label">Warehouse</h3>
                <ul>
                  <li className="warehouse-list__item-name">
                    <Link to={`/warehouse/${item.id}`}>
                      {item.warehouse_name}
                    </Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="warehouse-list__detail">
                <h3 className="warehouse-list__label">Address</h3>
                <ul>
                  <li className="warehouse-list__text">{item.address}</li>
                </ul>
              </div>
            </div>
            <div className="warehouse-list__details">
              <div className="warehouse-list__detail">
                <h3 className="warehouse-list__label">Contact Name</h3>
                <ul>
                  <li className="warehouse-list__status">
                    {item.contact_name}
                  </li>
                </ul>
              </div>
              <div className="warehouse-list__detail">
                <h3 className="warehouse-list__label">Contact Information</h3>
                <ul>
                  <li className="warehouse-list__status">
                    {item.contact_phone} <br />
                    {item.contact_email}
                  </li>
                </ul>
              </div>
            </div>
            <div className="warehouse-list__actions">
              <h3 className="warehouse-list__label">Actions</h3>
              <div className="warehouse-list__action-icons">
                <button onClick={() => handleDeleteClick(item)}>
                  <svg
                    className="warehouse-list__icon"
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

                <Link to={`/warehouse/${item.id}/edit`}>
                  <svg
                    className="warehouse-list__icon"
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
          <div className="warehouse-list__hidden">
            <svg
              className="warehouse-list__icon"
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
              className="warehouse-list__icon"
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
    </div>
  );
}

export default WarehouseListComponent;
