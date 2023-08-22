import { Card } from "../logic" 

interface CardProps extends Card {
  player: string
  show: boolean
}

export function ShowCard(props: CardProps) {
  const {
    name,
    image,
    alt,
    jeNeSaisQuoi,
    kookiness,
    elusiveness,
    zeitgeistRelevance,
    player,
    show
  } = props

  
    { return show 
     ? (<section className="card">
        <h2>{player}</h2>
        <img src={image} className="card-image" alt={alt} />
        <h3 className="name">
          Name: {name}
        </h3>
        <hr />
        <h3 id="p1JeNeSaisQuoi">Je ne sais quoi: {jeNeSaisQuoi}</h3>
        <h3 id="p1Kookiness">Kookiness: {kookiness}</h3>
        <h3 id="p1Elusiveness">Elusiveness: {elusiveness}</h3>
        <h3 id="p1ZeitgeistRelevance">Zeitgeist Relevance: {zeitgeistRelevance}</h3>
      </section>)
     : (<section className="card">
   </section>)
    }
  
}
