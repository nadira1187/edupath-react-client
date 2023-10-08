import { useEffect, useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Use the correct path to your JSON file.
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
        <h3 className="text-3xl text-center mt-3 font-bold">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ml-3">
      {cards.map((cart) => (
        <div key={cart.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* Use the image URL from the cart data */}
            <img src={cart.image} alt={cart.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{cart.name}</h2>
            <p>{cart.shortDescription}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
