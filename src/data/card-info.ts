import type { CardType, CartTypeInformation } from '../types/card'

const cardInfo: Record<CardType, CartTypeInformation> = {
  all: {
    color: "bg-neutral-500",
    hoverColor: "hover:bg-neutral-600",
    image: "all.svg",
    name: "Semua Kartu"
  },
  romance: {
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
    image: "couple.svg",
    name: "Romantis",
  },
  funny: {
    color: "bg-yellow-500",
    hoverColor: "hover:bg-yellow-600",
    image: "happy.svg",
    name: "Humor",
  },
  future: {
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    image: "future.svg",
    name: "Masa Depan"
  },
  memories: {
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    image: "memories.svg",
    name: "Kenangan"
  },
  "deep-talk": {
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    image: "deep-talk.svg",
    name: "Pembicaraan Mendalam"
  }
};

export default cardInfo;