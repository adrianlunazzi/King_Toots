import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  return (
    <div className="list-conteiner">
      <h2>{props.greeting}</h2>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
