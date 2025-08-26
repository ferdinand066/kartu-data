import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import cardInfo from '../data/card-info'
import type { CardType } from '../types/card'

export function Home() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-8">
        <PageHeader />
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {Object.entries(cardInfo).map(([key, cardType]) => (
            <Link key={key} to={`/${key}`} className="block">
              <Card 
                className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full ${cardType.color}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-full max-w-32 aspect-square bg-white/20 rounded-full flex items-center justify-center">
                      <img
                        src={`/${cardType.image}`}
                        alt={`${key} card`}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white capitalize">
                    {cardType.name}
                  </CardTitle>
                  <CardDescription className="text-white/90 text-sm">
                    {getCardDescription(key as CardType)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {cardType.name}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            © 2025 - Ferdinand Gunawan
          </p>
        </div>
      </div>
    </main>
  )
}

function getCardDescription(type: CardType): string {
  switch (type) {
    case "romance":
      return "Cinta ada di udara"
    case "funny":
      return "Tawa adalah obat terbaik"
    case "future":
      return "Masa depan cerah"
    case "memories":
      return "Nikmati setiap momen"
    default:
      return ""
  }
}
