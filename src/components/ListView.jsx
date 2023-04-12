import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map(item => (<ShopItem item={item}/>))}
    </div>
  );
}