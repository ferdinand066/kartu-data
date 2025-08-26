import { useLocation, useNavigate } from 'react-router-dom'
import cardInfo from '@/data/card-info'
import type { CardType } from '../types/card'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'

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
    <nav className="border-b bg-white/80 backdrop-blur-enhanced sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleHomeClick}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KD</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">
              Kartu Data
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {Object.entries(cardInfo).map(([key, cardType]) => (
              <Button
                key={key}
                variant={currentCardType === key ? "default" : "outline"}
                size="sm"
                onClick={() => handleCardTypeChange(key as CardType)}
                className={`${currentCardType === key
                    ? cardType.color
                    : "hover:bg-gray-100"
                  } transition-all duration-200`}
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
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2" align="end" side="bottom">
                <div className="space-y-1">
                  {Object.entries(cardInfo).map(([key, cardType]) => (
                    <Button
                      key={key}
                      variant={currentCardType === key ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleCardTypeChange(key as CardType)}
                      className={`w-full justify-start ${
                        currentCardType === key
                          ? cardType.color
                          : "hover:bg-gray-100"
                      } transition-all duration-200`}
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
