import './InventoryEditItem.scss';
import {Link} from 'react-router-dom';


function InventoryEditItem() {
    return (
        <main className='inventory-edit'>
            <header className="inventory-edit__header-container">
                <div className="inventory-edit__header">
                    <button className="inventory-edit__back-button">
                    <Link to="/inventory">
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
                        </Link>
                    </button>
                    <h1 className="inventory-edit__item-name">Edit Inventory Item</h1>
                </div>
            </header>
        <article className='inventory-edit__body'>
            <form className="edit-form">
                <section className="section">
                    <h2 className='edit-form__headers'>Item Details</h2>
                    <label for="item-name" className='edit-form__title'>Item Name</label>
                    <input type="text" id="item-name" value="Television" className='edit-form__input edit-form__input--text'/>
                    <label for="description"  className='edit-form__title'>Description</label>
                    <textarea id="description" className='edit-form__input edit-form__input--textarea'>
                        This 50", 4K LED TV provides a crystal-clear picture and vivid colors.
                    </textarea>
                    <label for="category" className='edit-form__title'>Category</label>
                    <select id="category" className='edit-form__input edit-form__input--select'>
                        <option selected>Electronics</option>
                        <option>Appliances</option>
                        <option>Furniture</option>
                    </select>
                </section>
                <section >
                <h2 className='edit-form__headers'>Item Availability</h2>
                <label className='edit-form__title'>Status</label>
                <formfield className='edit-form__radio-group'> 
                    <input id="in-stock" type="radio" name="status" value="in-stock" className='edit-form__input edit-form__input--radio'/> 
                    <label for="in-stock" className='edit-form__sub-title'>In Stock</label> 
                    <input id="out-of-stock" type="radio" name="status" value="out-of-stock" className='edit-form__input edit-form__input--radio'/>
                    <label for="out-of-stock" className='edit-form__sub-title'> Out of stock</label>
                </formfield>

                <label for="warehouse" className='edit-form__title'>Warehouse</label>
                <select id="warehouse" className='edit-form__input edit-form__input--select'>
                    <option selected>Manhattan</option>
                    <option>Brooklyn</option>
                    <option>Queens</option>
                </select>
                </section>


                <div className="edit-form__button-group">
                    <Link to={'/inventory'} className="edit-form__cancel-button">Cancel</Link>
                    <button type="submit" className="save-button">Save</button>
                </div>
            </form>

        </article>
        </main>
    );
}

export default InventoryEditItem;