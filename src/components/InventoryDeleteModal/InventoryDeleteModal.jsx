import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './InventoryDeleteModal.scss';

const InventoryDeleteModal = ({data}) => {

   const onDelete = ()=>{
        
   }

    return (
    <div className="modal-overlay">
    <div className="modal delete-modal">
        <div className="delete-modal__content">
            <div className="delete-modal__header">Delete Television inventory item?</div>
            <div><img src='assets/icons/close.svg' alt="x"/></div>
            <div className="delete-modal__body">
                <p>Please confirm that you'd like to delete Television from the inventory list.</p>
                <p>You won’t be able to undo this action.</p>
            </div>
            <div className="delete-modal__footer">
                <button className="btn btn-cancel" onClick={""}>Cancel</button>
                <button className="btn btn-delete" onClick={""}>Delete</button>
            </div>
        </div>
    </div>
    </div>
    );
};

export default InventoryDeleteModal;