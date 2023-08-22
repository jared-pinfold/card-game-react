import { Deck } from '../logic'

interface HeaderProps {
  decks: [Deck, Deck]
  pool: Deck
}

export function Header(props: HeaderProps) {
  const [cards1, cards2] = props.decks
  const pool = props.pool
  return (
    <header>
      <h1>Card Game</h1>
      <div className="decks" id="decks">
        <p id="p1Deck">Human: {cards1.length} cards</p>
        <p id="pool">Pool: {pool.length} cards</p>
        <p id="p2Deck">AI: {cards2.length} cards</p>
      </div>
    </header>
  )
}
