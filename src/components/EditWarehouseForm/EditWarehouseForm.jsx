import { Link, useParams } from "react-router-dom";
import "./EditWarehouseForm.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function EditWarehouseForm() {
  const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
  const [warehouseName, setWarehouseName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const param = useParams();

  useEffect(() => {
    const fetchWarehouse = async () => {
      const path = `${BASE_URL}/api/warehouses/${param.id}`;
      try {
        const response = await axios.put(path);
        const {
          id,
          warehouse_name,
          address,
          city,
          country,
          contact_name,
          contact_position,
          contact_phone,
          contact_email,
        } = response.data;
        setWarehouseName(warehouse_name);
        setStreetName(address);
        setCity(city);
        setCountry(country);
        setContactName(contact_name);
        setPosition(contact_position);
        setPhone(contact_phone);
        setEmail(contact_email);
        console.log(response.data);
      } catch (error) {
        console.log("unable to get warehouse", error.response.data);
        throw error;
      }
    };
    fetchWarehouse();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const path = `${BASE_URL}/api/warehouses/${param.id}`;
    try {
      const response = await axios.put(path, {
        warehouse_name: warehouseName,
        address: streetName,
        city: city,
        country: country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phone,
        contact_email: email,
      });
      if (response.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log("Unable to Update Changes:", error.response.data);
      throw error;
    }
  };

  return (
    <main className="warehouse-edit">
      <header className="warehouse-edit__header-container">
        <div className="warehouse-edit__header">
          <button className="warehouse-add__back-button">
            <Link to={`/warehouse/${param.id}`}>
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
          <h2 className="inventory-add__component-header">Edit Warehouse</h2>
        </div>
      </header>
      <div className="form-container">
        <form
          className="edit-form warehouse-edit-form"
          id="edit-warehouse-form"
          onSubmit={onSubmitForm}
        >
          <div className="edit-form__separation">
            <section className="edit-form__warehouse-info">
              <h3 className="edit-form__header">Warehouse Details</h3>
              <label
                htmlFor="edit-form__warehouse-name"
                className="edit-form__label"
              >
                Warehouse Name
              </label>
              <input
                type="text"
                name="warehouse-name"
                placeholder="Warehouse Name"
                className="edit-form__input"
                id="edit-form__warehouse-name"
                defaultValue={warehouseName}
                onChange={(e) => setWarehouseName(e.target.value)}
              />
              <label htmlFor="edit-form__address" className="edit-form__label">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                className="edit-form__input"
                id="edit-form__address"
                defaultValue={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
              <label htmlFor="edit-form__city" className="edit-form__label">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="edit-form__input"
                id="edit-form__city"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="edit-form__country" className="edit-form__label">
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="edit-form__input"
                id="edit-form__country"
                defaultValue={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </section>

            <section className="edit-form__personnel-info">
              <h3 className="edit-form__header">Contact Details</h3>
              <label
                htmlFor="edit-form__contact-name"
                className="edit-form__label"
              >
                Contact Name
              </label>
              <input
                type="text"
                name="contact-name"
                placeholder="Contact Name"
                className="edit-form__input"
                id="edit-form__contact-name"
                defaultValue={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <label htmlFor="edit-form__position" className="edit-form__label">
                Position
              </label>
              <input
                type="text"
                name="position"
                placeholder="Position"
                className="edit-form__input"
                id="edit-form__position"
                defaultValue={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <label htmlFor="edit-form__phone" className="edit-form__label">
                Phone Number
              </label>
              <input
                type="phone"
                name="phone-number"
                placeholder="Phone Number"
                className="edit-form__input"
                id="edit-form__phone"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="edit-form__email" className="edit-form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="edit-form__input"
                id="edit-form__email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
          </div>
        </form>
      </div>
      <div className="edit-form__button-group">
        <div className="edit-form__button-group--container">
          <Link to="/">
            <button type="button" className="edit-form__cancel">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            form="edit-warehouse-form"
            className="edit-form__submit"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
}

export default EditWarehouseForm;
