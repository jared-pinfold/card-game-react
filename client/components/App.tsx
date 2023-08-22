import { useState } from 'react'
import { ShowCard } from './Card'
import { Header } from './Header'
import { Status } from './Status'
import { createStartingDeck, Deck } from '../logic'

function App() {
  const [decks, setDecks] = useState(createStartingDeck())
  const [pool, setPool] = useState([] as Deck)

  return (
    <>
      <Header {...{ decks, pool }} />
      <main>
        <div className="container" id="'mainGame">
          <ShowCard {...{...decks[0][0], player: "Human Player"}}/>
          <ShowCard {...{...decks[1][0], player: "Advanced AI"}}/>
        </div>
        <Status />
      </main>
    </>
  )
}

export default App
