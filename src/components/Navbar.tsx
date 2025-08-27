import { useLocation, useNavigate } from 'react-router-dom'
import cardInfo from '@/data/card-info'
import type { CardType } from '../types/card'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  // Determine current card type from URL
  const getCurrentCardType = (): CardType | undefined => {
    if (currentPath === '/') return undefined;
    const pathSegments = currentPath.split('/')
    const cardType = pathSegments[1] as CardType
    return cardInfo[cardType] ? cardType : 'romance'
  }

  const currentCardType = getCurrentCardType()

  const handleCardTypeChange = (type: CardType) => {
    if (type === currentCardType) {
      navigate('/') // Go to home if same type is selected
    } else {
      navigate(`/${type}`) // Navigate to specific card type
    }
  }

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <nav className="border-b bg-white/80 backdrop-blur-enhanced sticky top-0 z-50" role="navigation" aria-label="Navigasi Utama">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleHomeClick}
            role="button"
            tabIndex={0}
            aria-label="Kembali ke Beranda"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleHomeClick()
              }
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KD</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">
              Kartu Data
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2" role="menubar">
            {Object.entries(cardInfo).map(([key, cardType]) => (
              <Button
                key={key}
                variant={currentCardType === key ? "default" : "outline"}
                size="sm"
                onClick={() => handleCardTypeChange(key as CardType)}
                className={cn(currentCardType === key ? cn(cardType.color, cardType.hoverColor) : "hover:bg-gray-100",
                  "transition-all duration-200")}
                role="menuitem"
                aria-current={currentCardType === key ? "page" : undefined}
                aria-label={`Buka kategori ${cardType.name}`}
              >
                {cardType.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Popover */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2"
                  aria-label="Buka menu mobile"
                  aria-expanded="false"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2" align="end" side="bottom" role="menu">
                <div className="gap-1">
                  {Object.entries(cardInfo).map(([key, cardType]) => (
                    <Button
                      key={key}
                      variant={currentCardType === key ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleCardTypeChange(key as CardType)}
                      className={cn("w-full justify-start transition-all duration-200", currentCardType === key
                          ? cardType.color
                          : "hover:bg-gray-100"
                        )}
                      role="menuitem"
                      aria-current={currentCardType === key ? "page" : undefined}
                      aria-label={`Buka kategori ${cardType.name}`}
                    >
                      {cardType.name}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  )
}
