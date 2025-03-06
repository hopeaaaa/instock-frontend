import './InventoryDetail.scss';

const InventoryDetail = () => {
    return (
        <main className="inventory-details">
            <div className='inventory-details__header-container'>
            <header className="inventory-details__header">
                <h1 className="inventory-details__item-name">Television</h1>
                <button className="inventory-details__edit-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z" fill="#2E66E6"/>
                    </svg> Edit
                </button>
            </header>
            </div>
            <article className="inventory-details__body">
                <div className="separation-container">
                    <div className="inventory-details__section">
                        <h2 className="inventory-details__title">ITEM DESCRIPTION:</h2>
                        <p className="inventory-details__description">This is the Inventory Details component.</p>
                    </div>
                    <div className="inventory-details__section">
                        <h2 className="inventory-details__title">CATEGORY:</h2>
                        <p className="inventory-details__description">Electronics</p>
                    </div>
                </div>
                <div className="inventory-details__separation-container">
                    <div className="inventory-details__section inventory-details__section--column">
                        <div className="inventory-details__status">
                            <div className="inventory-details__section">
                                <h2 className="inventory-details__title">STATUS:</h2>
                                <p className="inventory-details__description">in stock</p>
                            </div>
                        </div>
                        <div className="inventory-details__section">
                            <div className="inventory-details__quantity">
                                <h2 className="inventory-details__title">QUANTITY:</h2>
                                <p className="inventory-details__description">500</p>
                            </div>
                        </div>
                    </div>
                    <div className="inventory-details__section">
                        <h2 className="inventory-details__title">WAREHOUSE:</h2>
                        <p className="inventory-details__description">Manhathan</p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default InventoryDetail;