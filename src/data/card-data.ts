import type { CardModel, CardType } from "@/types/card";
import romanticCard from "./romantic";
import futureCard from "./future";
import funnyCard from "./funny";
import memoryCard from "./memory";

const cards: Record<CardType, CardModel[]> = {
  all: [...romanticCard, ...funnyCard, ...futureCard, ...memoryCard],
  romance: romanticCard,
  funny: funnyCard,
  future: futureCard,
  memories: memoryCard,
};

export default cards;
