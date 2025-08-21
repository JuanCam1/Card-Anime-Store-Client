export interface CardModel {
  id: string;
  name: string;
  anime: string;
  price: number | null;
  location: string;
  rarity: string;
  condition: string;
  transaction: Transaction;
  image: string;
  isAvailable: boolean;
  user: UserCardModelI;
}

type Transaction = "venta" | "intercambio" | "ambos";
