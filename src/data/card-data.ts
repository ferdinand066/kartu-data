import type { CardModel, CardType } from "@/types/card";
import romanticCard from "./romantic";
import futureCard from "./future";
import funnyCard from "./funny";
import memoryCard from "./memory";
import deepTalkCard from "./deep-talk";

const cards: Record<CardType, CardModel[]> = {
  all: [...romanticCard, ...funnyCard, ...futureCard, ...memoryCard, ...deepTalkCard],
  romance: romanticCard,
  funny: funnyCard,
  future: futureCard,
  memories: memoryCard,
  "deep-talk": deepTalkCard,
};

export default cards;
