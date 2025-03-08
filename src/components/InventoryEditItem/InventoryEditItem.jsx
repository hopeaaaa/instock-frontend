import './InventoryEditItem.scss';
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

function InventoryEditItem() {
    const VITE_SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
    const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT;
    const param = useParams();
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stockStatus, setStockStatus] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [warehouse, setWarhouse] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [warehouseList, setWarehouseList] = useState([]);
    
    
    const onSubmitForm = async(e) =>{
        e.preventDefault();
        const path = `${VITE_SERVER_BASE_URL}:${VITE_SERVER_PORT}/inventory/api/inventories/${param.id}`;
        try{
            const response = await axios.put(path, {
                id: param.id,
                item_name: name,
                description: description,
                category: category,
                status: stockStatus,
                quantity: quantity,
                warehouse_id: warehouse,
            });
            if (response.status === 200) {
                window.location.href = '/inventory';
            }
        }catch(error){
            console.log("Message:", error)
            throw error;
        }
     
    }
    
    

    
    const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
    const PORT = import.meta.env.VITE_SERVER_PORT;
    useEffect(() => {
        const getInventoryDetails = async () => {
            const path = `${BASE_URL}:${PORT}/inventory/${param.id}`;
            try {
                const response = await axios.get(path);
                setData(response.data);

                const { item_name, description, category, status, quantity, warehouse_id } = response.data;
                setName(item_name);
                setDescription(description);
                setCategory(category);
                setStockStatus(status);
                setQuantity(quantity);
                setWarhouse(warehouse_id)
                
            } catch (error) {
                console.error("Unable get inventory by id:", error);
                throw error;
            }
        };
        getInventoryDetails();
    }, []);
console.log(data);
    useEffect(()=>{
        const getCategories = async ()=>{
            const path = `${BASE_URL}:${PORT}/inventory/api/inventories/category`;
            try{
                const response = await axios.get(path);
                if (JSON.stringify(response.data) !== JSON.stringify(categoryList)) {

                    setCategoryList(response.data); // Update only if data is different
                }
            }catch(error){
                console.error("Unable get all categories:", error);
                throw error;
            }
        }
        getCategories();
    },[categoryList])
    
    useEffect(()=>{
        const getWarehouses = async ()=>{
            const path = `${BASE_URL}:${PORT}/warehouse`;
            try{
                const response = await axios.get(path);
                if (JSON.stringify(response.data) !== JSON.stringify(warehouseList)) {
                    setWarehouseList(response.data); // Update only if data is different
                }
            }catch(error){
                console.error("Unable get all categories:", error);
                throw error;
            }
        }
        getWarehouses();
    },[warehouseList])
    

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
            <form className="edit-form" onSubmit={onSubmitForm}>
                <section className="section">
                    <h2 className='edit-form__headers'>Item Details</h2>
                    <label htmlFor="item-name" className='edit-form__title'>Item Name</label>
                    <input type="text" id="item-name" name='item_name'  className='edit-form__input edit-form__input--text' defaultValue={name}
                     onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="description"  className='edit-form__title'>Description</label>
                    <textarea id="description" name='description' className='edit-form__input edit-form__input--textarea'defaultValue={description}
                     onChange={(e)=>setDescription(e.target.value)}>    
                    </textarea>
                    <label htmlFor="category" className='edit-form__title'>Category</label>
                    <select id="category" className='edit-form__input edit-form__input--select' 
                        value={category}
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}>

                        {categoryList.map((cat,i)=>{
                            return<option key={i}  value={cat.category}>{cat.category}</option>
                        })}
                    </select>
                </section>
                <section >
                <h2 className='edit-form__headers'>Item Availability</h2>
                <label className='edit-form__title'>Status</label>
                <div className='edit-form__radio-group'> 
                    <div className='edit-form__radio-group--separation'>
                        <input id="in-stock" type="radio" name="status" value="In Stock" 
                           checked={stockStatus== "In Stock"} onChange={(e)=>setStockStatus(e.target.value)}
                            className='edit-form__input edit-form__input--radio'
                        />
                        <label htmlFor="in-stock" className='edit-form__sub-title'>In Stock</label> 
                    </div>
                    <div className='edit-form__radio-group--separation'>
                        <input selected id="Out of Stock" type="radio" name="status" 
                        value="out-of-stock" 
                        checked={stockStatus !== "In Stock"} 
                        onClick={(e)=>{setStockStatus(e.target.value);}}
                        className='edit-form__input edit-form__input--radio'/>
                        <label htmlFor="out-of-stock" className='edit-form__sub-title'> Out of stock</label>
                    </div>
                </div>
                {stockStatus=="In Stock" &&
                    <div>
                        <label htmlFor="item-quantity" className='edit-form__title'>Quantity</label>
                    <input type="number" id="item-quantity" name='item_quantity'  className='edit-form__input edit-form__input--text' defaultValue={quantity}
                     onChange={(e)=>setQuantity(e.target.value)}/>
                    </div>
                }
                <label htmlFor="warehouse" className='edit-form__title'>Warehouse</label>
                <select id="warehouse" className='edit-form__input edit-form__input--select'
                    onChange={(e) => setWarhouse(e.target.value)}
                    value={warehouse}
                    name='warehouse_id'>
                        <option value="">----</option>
                    {warehouseList.map((ware,i)=>{
                            return<option key={i}  value={ware.id}>{ware.warehouse_name}</option>
                        })}
                        
                </select>
                </section>


                <div className="edit-form__button-group">
                    <Link to={'/inventory'} className="btn btn__cancel">Cancel</Link>
                    <button type="submit" className="btn btn__save">Save</button>
                </div>
            </form>

        </article>
        </main>
    );
}

export default InventoryEditItem;