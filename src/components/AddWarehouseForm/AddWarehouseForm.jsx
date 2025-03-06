import { Link } from "react-router-dom";
import "./AddWarehouseForm.scss";

function AddWarehouseForm() {
  return (
    <form className="add-form">
      <div className="add-form__warehouse-info">
        <h3 className="add-form__header">Warehouse Details</h3>
        <label htmlFor="add-form__warehouse-name" className="add-form__label">
          Warehouse Name
        </label>
        <input
          type="text"
          name="warehouse-name"
          placeholder="Warehouse Name"
          className="add-form__input"
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
          name="contact-name"
          placeholder="Contact Name"
          className="add-form__input"
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
          id="add-form__position"
        />
        <label htmlFor="add-form__phone" className="add-form__label">
          Phone Number
        </label>
        <input
          type="number"
          name="phone-number"
          placeholder="Phone Number"
          className="add-form__input"
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
          id="add-form__email"
        />
      </div>
      <div className="add-form__buttons">
        <Link to="/">
          <button type="button" className="add-form__cancel">
            Cancel
          </button>
        </Link>
        <button type="submit" className="add-form__submit">
          + Add Warehouse
        </button>
      </div>
    </form>
  );
}

export default AddWarehouseForm;
