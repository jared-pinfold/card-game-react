import { useState } from 'react'
import { ShowCard } from './ShowCard'
import { Header } from './Header'
import { Status } from './Status'
import { createStartingDeck, Deck } from '../logic'

function App() {
  const [decks, setDecks] = useState(createStartingDeck())
  const [pool, setPool] = useState([] as Deck)
  const [showCards, setShowCards] = useState([true, false])
  const [humanTurn, setHumanTurn] = useState(true)

  return (
    <>
      <Header {...{ decks, pool }} />
      <main>
        <div className="container" id="'mainGame">
          <ShowCard
            {...{ ...decks[0][0], player: 'Human Player', show: showCards[0] }}
          />
          <ShowCard
            {...{ ...decks[1][0], player: 'Advanced AI', show: showCards[1] }}
          />
        </div>
        <Status {...{ humanTurn, setHumanTurn, setShowCards }} />
      </main>
    </>
  )
}

export default App
