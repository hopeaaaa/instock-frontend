import { Link } from "react-router-dom";
import "./AddWarehouseForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function AddWarehouseForm({ baseUrl, PORT }) {
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPostion, setContactPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleWarehouseNameChange = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  function handleContactNameChange(event) {
    setContactName(event.target.value);
  }
  const handleContactPositionChange = (event) => {
    setContactPosition(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const addWarehouse = async () => {
    try {
      const response = await axios.post(
        `${baseUrl + PORT}/warehouse/createwarehouse`,
        {
          warehouse_name: warehouseName,
          address: address,
          city: city,
          country: country,
          contact_name: personName,
          contact_position: position,
          contact_phone: phoneNumber,
          contact_email: email,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Unable to add warehouse", error);
    }
  };

  async function submitForm(event) {
    event.preventDefault();
    if (
      !warehouseName ||
      !address ||
      !city ||
      !country ||
      !contactName ||
      !contactPostion ||
      !phoneNumber ||
      !email
    )
      return alert("Please fill all fields");

    await addWarehouse();

    setWarehouseName("");
    setAddress("");
    setCity("");
    setCountry("");
    setContactName("");
    setContactPosition("");
    setPhoneNumber("");
    setEmail("");
  }

  return (
    <form className="add-form">
      <div className="add-form__warehouse-info">
        <h3 className="add-form__header">Warehouse Details</h3>
        <label htmlFor="add-form__warehouse-name" className="add-form__label">
          Warehouse Name
        </label>
        <input
          type="text"
          name="locationName"
          placeholder="Warehouse Name"
          className="add-form__input"
          value={warehouseName}
          onChange={handleWarehouseNameChange}
          id="add-form__warehouse-name"
        />
        <label htmlFor="add-form__address" className="add-form__label">
          Street Address
        </label>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          className="add-form__input"
          value={address}
          onChange={handleAddressChange}
          id="add-form__address"
        />
        <label htmlFor="add-form__city" className="add-form__label">
          City
        </label>
        <input
          type="text"
          name="city"
          placeholder="City"
          className="add-form__input"
          value={city}
          onChange={handleCityChange}
          id="add-form__city"
        />
        <label htmlFor="add-form__country" className="add-form__label">
          Country
        </label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="add-form__input"
          value={country}
          onChange={handleCountryChange}
          id="add-form__country"
        />
      </div>
      <div className="add-form__personnel-info">
        <h3 className="add-form__header">Contact Details</h3>
        <label htmlFor="add-form__contact-name" className="add-form__label">
          Contact Name
        </label>
        <input
          type="text"
          name="personName"
          placeholder="Contact Name"
          className="add-form__input"
          value={contactName}
          onChange={handleContactNameChange}
          id="add-form__contact-name"
        />
        <label htmlFor="add-form__position" className="add-form__label">
          Position
        </label>
        <input
          type="text"
          name="position"
          placeholder="Position"
          className="add-form__input"
          value={contactPostion}
          onChange={handleContactPositionChange}
          id="add-form__position"
        />
        <label htmlFor="add-form__phone" className="add-form__label">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="add-form__input"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          id="add-form__phone"
        />
        <label htmlFor="add-form__email" className="add-form__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="add-form__input"
          value={email}
          onChange={handleEmailChange}
          id="add-form__email"
        />
      </div>
      <div className="add-form__buttons">
        <Link to="/">
          <button type="button" className="add-form__cancel">
            Cancel
          </button>
        </Link>
        <button type="submit" className="add-form__submit" onClick={submitForm}>
          + Add Warehouse
        </button>
      </div>
    </form>
  );
}

export default AddWarehouseForm;
