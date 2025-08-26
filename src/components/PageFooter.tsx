import type { CardType } from '../types/card'

interface PageFooterProps {
  selectedCardType: CardType
}

export function PageFooter({ selectedCardType }: PageFooterProps) {
  return (
    <div className="text-center space-y-2">
      <p className="text-sm text-gray-500">
        Click on the navigation buttons above to explore different card types
      </p>
      <div className="flex justify-center space-x-4 text-xs text-gray-400">
        <span>Total Cards: 4</span>
        <span>•</span>
        <span>Current: {selectedCardType}</span>
      </div>
    </div>
  )
}
