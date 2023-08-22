import { useEffect, useState } from "react"
import { Cards } from "./Cards"
import { Header } from "./Header"
import { Status } from "./Status"
import { createStartingDeck, Deck } from "../logic"

function App() {

  const [decks, setDecks] = useState([[], []] as [Deck, Deck])
  const [pool, setPool] = useState([] as Deck)

  useEffect(() => {
    setDecks(createStartingDeck())
  }, [])

  return (
    <>
      <Header {...{decks, pool}}/>
      <main>
        <Cards />
        <Status />
      </main>
    </>
 )
}

export default App
