import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map(card => (<ShopCard card={card}/>))}      
    </div>
  );
}