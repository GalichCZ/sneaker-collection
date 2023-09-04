export interface ICard {
  _id: string | number;
  model: string;
  brand: string;
  year: number;
  size: string;
  price: number;
}

export type CardType = Omit<ICard, "_id">;
