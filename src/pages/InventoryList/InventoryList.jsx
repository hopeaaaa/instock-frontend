import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";
import "./InventoryList.scss";
import InventoryListComponent from "../../components/InventoryListComponent/InventoryListComponent.jsx";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [clickedItem, setClickedItem] = useState(); 

  const handleDeleteClick = (item)=>{
    setClickedItem(item);
    setShowDelete(!showDelete);
  }


  useEffect(() => {
    fetchInventory();
  }, []);

  return <InventoryListComponent />;
}

export default InventoryList;
