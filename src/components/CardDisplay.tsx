import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import cardInfo from '../data/card-info'
import type { CardType } from '../types/card'
import { cn } from '@/lib/utils'

interface CardDisplayProps {
  selectedCardType: CardType
}

const getCardContent = (type: string) => {
  switch (type) {
    case "romance":
      return "Love is in the air"
    case "funny":
      return "Laughter is the best medicine"
    case "future":
      return "The future is bright"
    case "memories":
      return "Cherish every moment"
    default:
      return ""
  }
}

export function CardDisplay({ selectedCardType }: CardDisplayProps) {
  return (
    <div className="w-full max-w-md">
      <Card className={cn("overflow-hidden border-0 shadow-2xl card-hover", cardInfo[selectedCardType].color)}>
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <img
                src={`/${cardInfo[selectedCardType].image}`}
                alt={`${selectedCardType} card`}
                className="w-12 h-12"
              />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-white capitalize">
            {selectedCardType}
          </CardTitle>
          <CardDescription className="text-white/90 text-lg">
            {getCardContent(selectedCardType)}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {selectedCardType}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Interactive
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
