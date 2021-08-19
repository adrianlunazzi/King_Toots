import ItemList from "../ItemList/ItemList";
import Slider from "../Slider/Slider";
import "./itemlistcontainer.css";
const ItemListContainer = (props) => {
  return (
    <div className="list-conteiner">
      <Slider />
      <h2> {props.greeting}</h2>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
