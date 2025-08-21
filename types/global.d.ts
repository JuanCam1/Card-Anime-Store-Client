import { CardModel } from "./card-model";
import { UserCardModel } from "./user-model";

declare global {
  type CardModelI = CardModel;
  type UserCardModelI = UserCardModel;
}
