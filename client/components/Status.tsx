export function Status () {
  return (
    <>
    <section className="choose-attribute" id="choose-attribute">
          <button
            className="button"
            id="buttonJeNeSaisQuoi"
          >
            Use Je ne sais quoi
          </button>
          <button
            className="button"
            id="buttonKookiness"
          >
            Use Kookiness
          </button>
          <button className="button" id="buttonElusiveness">
            Use Elusiveness
          </button>
          <button
            className="button"
            id="buttonZeitgeistRelevance"
          >
            Use Zeitgeist Relevance
          </button>
        </section>
        <section className="reveal-card" id="revealCard">
          <h2 id="p2Chooses">P2 chose ... </h2>
          <button
            className="button"
            id="buttonRevealCard"
          >
            Reveal your card
          </button>
        </section>
        <section id="notifyGameWinnerZone">
          <h1 id="notifyGameWinner">Game winner</h1>
        </section>
        <section id="notifyRoundWinnerZone">
          <h2 id="notifyRoundWinner">Round winner</h2>
        </section>
    </>
  )
}