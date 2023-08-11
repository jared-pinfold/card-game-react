export function Header () {
  return (
    <header>
      <h1>Card Game</h1>
      <div className="decks" id='decks'>
        <p className='p1DeckClass'id="p1Deck">5 cards</p>
        <p id="pool">0 cards</p>
        <p id="p2Deck">5 cards</p>
      </div>
  </header>
  )
}