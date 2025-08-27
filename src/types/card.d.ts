export type CardType = "all" | "deep-talk" | "romance" | "funny" | "future" | "memories"

export interface CardModel {
  id: number
  type: CardType
  content: string
}

export interface CartTypeInformation {
  color: string
  hoverColor: string
  image: string
  name: string
}

export interface CardTypeOption {
  key: CardType
  label: string
  color: string
}
