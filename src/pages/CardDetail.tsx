import cards from '@/data/card-data'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import cardInfo from '../data/card-info'
import type { CardModel, CardType } from '../types/card'

export function CardDetail() {
  const { cardType } = useParams<{ cardType: string }>()
  const validCardType = cardType as CardType
  const [selectedCard, setSelectedCard] = useState<CardModel>();
  const [cardHistory, setCardHistory] = useState<CardModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  
  // Check if the card type is valid
  if (!cardInfo[validCardType]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center gap-6">
          <h1 className="text-4xl font-bold text-gray-900">Kartu tidak ditemukan</h1>
          <p className="text-xl text-gray-600">Tipe kartu yang Anda cari tidak ada.</p>
          <Link to="/">
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const availableCards = cards[validCardType];

  // Select a random card when component mounts or card type changes
  useEffect(() => {
    if (availableCards && availableCards.length > 0) {
      const randomCard = getRandomCard();
      setSelectedCard(randomCard);
      setCardHistory([randomCard]);
      setCurrentIndex(0);
    }
  }, [availableCards]);

  // Function to get a random card that hasn't been shown recently
  const getRandomCard = (): CardModel => {
    if (!availableCards || availableCards.length === 0) {
      return {} as CardModel;
    }

    // Get cards that haven't been shown in the last 5 cards
    const recentCards = cardHistory.slice(-5);
    const availableCardsToShow = availableCards.filter(card => 
      !recentCards.some(recentCard => recentCard.id === card.id)
    );

    // If we have cards that haven't been shown recently, use those
    if (availableCardsToShow.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCardsToShow.length);
      return availableCardsToShow[randomIndex];
    }

    // If all cards have been shown recently, just pick a random one
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    return availableCards[randomIndex];
  };

  // Function to get the next random card
  const getNextCard = () => {
    const nextCard = getRandomCard();
    setSelectedCard(nextCard);
    setCardHistory(prev => [...prev, nextCard]);
    setCurrentIndex(prev => prev + 1);
  };

  // Function to get the previous card
  const getPreviousCard = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevCard = cardHistory[prevIndex];
      setSelectedCard(prevCard);
      setCurrentIndex(prevIndex);
    }
  };

  // Check if previous button should be enabled
  const canGoPrevious = currentIndex > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Button>
          </Link>
          <div className="h-6 w-px bg-gray-300" />
          <span className="text-sm text-gray-500">Tipe Kartu: {cardInfo[selectedCard?.type ?? 'romance'].name}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Card Display */}
          <div className="w-full max-w-md">
            <Card className={cn("overflow-hidden border-0 shadow-2xl card-hover", cardInfo[selectedCard?.type ?? 'romance'].color)}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-full max-w-64 aspect-square bg-white/20 rounded-full flex items-center justify-center">
                    <img
                      src={`/${cardInfo[selectedCard?.type ?? 'romance'].image}`}
                      alt={`${validCardType} card`}
                      className="w-full"
                    />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-white capitalize">
                {cardInfo[selectedCard?.type ?? 'romance'].name}
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                {selectedCard?.content}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {selectedCard?.id}
                  </Badge>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={getPreviousCard}
                    disabled={!canGoPrevious}
                    className={cn("flex items-center gap-2",
                      canGoPrevious 
                        ? 'bg-white/20 text-white border-white/30 hover:bg-white/30' 
                        : 'bg-white/10 text-white/50 border-white/20 cursor-not-allowed')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={getNextCard}
                    className="ml-auto bg-white/20 text-white border-white/30 hover:bg-white/30 flex items-center gap-2"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center gap-2">
            <p className="text-sm text-gray-500">
              Jelajahi tipe kartu lain atau kembali ke beranda
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button variant="outline">Lihat Semua Kartu</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}