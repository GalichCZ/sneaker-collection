import { CardType } from "@/Types/ICard";
import { Delete } from "@/UI/Icons";
import { FC } from "react";

const Card: FC<CardType> = ({ model, brand, year, size, price }) => {
  return (
    <div className="collection-card">
      <Delete />
      <h3>{model}</h3>
      <p>{brand}</p>
      <div>
        <div>
          <strong>{year}</strong>
          <p>Year</p>
        </div>
        <div>
          <strong>{size}</strong>
          <p>Size</p>
        </div>
        <div>
          <strong>{price}</strong>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
