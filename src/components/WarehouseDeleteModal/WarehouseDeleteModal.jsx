import axios from "axios";
import "./WarehouseDeleteModal.scss";

const WarehouseDeleteModal = ({
  item,
  setShowDelete,
  warehouseList,
  setWarehouseList,
}) => {
  const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

  const onDelete = async () => {
    try {
      const path = `${BASE_URL}/api/warehouses/${item.id}`;
      const response = await axios.delete(path);

      if (response.status === 204) {
        // remove from state
        setWarehouseList(warehouseList.filter((i) => i.id !== item.id));
        setShowDelete(false);
      }
    } catch (error) {
      console.error("Unable to delete:", error);
      throw error;
    }
  };

  return (
    <div className="container-sticky">
      <div className="container modal">
        <div className="modal-overlay">
          <div className="modal delete-modal">
            <div className="delete-modal__content">
              <button
                className="delete-modal__close-btn"
                onClick={() => setShowDelete(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#13182C"
                  />
                </svg>
              </button>
              <div className="delete-modal__header">
                <h2>Delete {item?.warehouse_name} warehouse?</h2>
              </div>
              <div className="delete-modal__body">
                <p>
                  Please confirm that you'd like to delete{" "}
                  {item?.warehouse_name} from the list of warehouses.
                </p>
                <p>You won’t be able to undo this action.</p>
              </div>
              <div className="delete-modal__footer">
                <button
                  className="btn btn__cancel"
                  onClick={() => setShowDelete(false)}
                >
                  Cancel
                </button>
                <button className="btn btn__delete" onClick={onDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDeleteModal;
