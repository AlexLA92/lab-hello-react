import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import ItemElement from "./ItemElement";
import("./ItemsSection.css");

function ItemSection() {
  const itemsArray = [
    {
      title: "Declarative",
      content: "React makes it painless to create interactive UIs",
      image: image2,
    },
    {
      title: "Components",
      content: "Build encapsulated components that manage their state",
      image: image3,
    },
    {
      title: "Signle way",
      content: "A set of immutable values are passed to their components",
      image: image4,
    },
    {
      title: "JSX",
      content: "Statically-typed desgned to run on modern browsers",
      image: image5,
    },
  ];

  const items = [];

  itemsArray.forEach((itemElement) => {
    items.push(
      <ItemElement
        image={itemElement.image}
        title={itemElement.title}
        content={itemElement.content}
      />
    );
  });

  return <section className="items-section">{items}</section>;
}

export default ItemSection;
