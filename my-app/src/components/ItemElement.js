import "./ItemElement.css";

function ItemElement(props) {
  return (
    <div className="item-container">
      <img src={props.image} alt={props.title}></img>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default ItemElement;
