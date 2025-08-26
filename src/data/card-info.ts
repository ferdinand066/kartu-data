import type { CardType, CartTypeInformation } from '../types/card'

const cardInfo: Record<CardType, CartTypeInformation> = {
  all: {
    color: "bg-neutral-500",
    image: "all.svg",
    name: "Semua Kartu"
  },
  romance: {
    color: "bg-red-500",
    image: "couple.svg",
    name: "Romantis",
  },
  funny: {
    color: "bg-yellow-500",
    image: "happy.svg",
    name: "Humor",
  },
  future: {
    color: "bg-green-500",
    image: "future.svg",
    name: "Masa Depan"
  },
  memories: {
    color: "bg-blue-500",
    image: "memories.svg",
    name: "Kenangan"
  },
};

export default cardInfo;