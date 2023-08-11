export function Cards() {
  return (
    <div className="container" id="'mainGame">
      <section className="card" id="card1">
        <h2>Human Player</h2>
        <img id="p1Img" className="card-image" alt="" />
        <h3 id="p1Name" className="name">
          Name:
        </h3>
        <hr />
        <h3 id="p1JeNeSaisQuoi">Je ne sais quoi:</h3>
        <h3 id="p1Kookiness">Kookiness:</h3>
        <h3 id="p1Elusiveness">Elusiveness:</h3>
        <h3 id="p1ZeitgeistRelevance">Zeitgeist Relevance:</h3>
      </section>

      <section className="card" id="card2">
        <h2>Advanced AI</h2>
        <p id="p2Deck"></p>
        <img id="p2Img" className="card-image" alt="" />
        <h3 id="p2Name">Name:</h3>
        <hr />
        <h3 id="p2JeNeSaisQuoi">Je ne sais quoi:</h3>
        <h3 id="p2Kookiness">Kookiness:</h3>
        <h3 id="p2Elusiveness">Elusiveness:</h3>
        <h3 id="p2ZeitgeistRelevance">Zeitgeist Relevance:</h3>
      </section>
    </div>
  )
}
