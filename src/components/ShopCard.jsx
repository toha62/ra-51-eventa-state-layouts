export default function ShopCard({ card }) {
  return (
    <div className="card">
      <h2 className="item-name">{card.name}</h2>
      <div className="item-color">{card.color}</div>
      <div className="card-img">
        <img src={card.img} alt="" className="" />
      </div>      
      <div className="footer">
        <div className="price">${card.price}</div>
        <button>add to cart</button>
      </div>
    </div>
  );
}