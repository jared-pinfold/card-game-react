type Card = {
  name: string
  image: string
  alt: string
  jeNeSaisQuoi: number
  kookiness: number
  elusiveness: number
  zeitgeistRelevance: number
}

type Str = {
  jeNeSaisQuoi: string
  kookiness: string
  elusiveness: string
  zeitgeistRelevance: string
}

type Deck = Card[]
type Attribute = keyof Str

export { Deck, createStartingDeck, chooseAttribute, didSomeoneWin, maintainPool }

function createStartingDeck(): [Deck, Deck] {
  // create a starting deck of cards, randomising the attribute values between 1 and 10
  const seed = [
    {
      name: 'Banana',
      image: './images/banana.jpeg',
      alt: 'Photograph of a ripe banana',
    },
    {
      name: 'Empty CD Case',
      image: './images/emptyCdCase.jpeg',
      alt: 'Photograph of an empty, clear CD case',
    },
    {
      name: 'Bicycle',
      image: './images/bicycle.webp',
      alt: 'Photograph of a black bicycle',
    },
    {
      name: 'Oatmeal',
      image: './images/oatmeal.jpeg',
      alt: 'Photograph of a bowl of oatmeal with strawberry garnish',
    },
    {
      name: 'Padlock',
      image: './images/padlock.jpeg',
      alt: 'Photograph of an unlocked padlock with a key sitting next to it',
    },
    {
      name: 'Birthday Present',
      image: './images/birthdayPresent.jpeg',
      alt: 'Photograph of a black and white striped box with a lid and a silver bow on top.',
    },
    {
      name: 'Printer',
      image: './images/printer.webp',
      alt: 'Cartoon picture of a home office printer',
    },
    {
      name: 'Shoe',
      image: './images/shoe.jpeg',
      alt: 'Photograph of a single brown leather shoe',
    },
    {
      name: 'Squirrel',
      image: './images/squirrel.jpeg',
      alt: 'Photograph of a grey squirrel standing on a rock eating a nut',
    },
    {
      name: 'Snowperson',
      image: './images/snowperson.webp',
      alt: 'Cartoon picture of a snowperson wearing a top hat and a scarf',
    },
  ].map((card) => {
    return {
      ...card,
      jeNeSaisQuoi: randomRange(1, 10),
      kookiness: randomRange(1, 10),
      elusiveness: randomRange(1, 10),
      zeitgeistRelevance: randomRange(1, 10),
    }
  })
  // shuffle the starting deck
  shuffleArray(seed)
  // deal the starting deck so that each player has their own deck of 5 cards
  const player1Deck = seed.filter((card, i) => i % 2 === 0)
  const player2Deck = seed.filter((card, i) => i % 2 !== 0)
  // return an array [player1deck, player2deck]
  return [player1Deck, player2Deck]
}

function chooseAttribute(p2card: Card): Attribute {
  // Evaluate the 4 comparison attributes (jeNeSaisQuoi, kookiness, elusiveness, zeitgeistRelevance)
  // Find which is highest (or randomise from the highest if there is multiple)
  const obj = {
    jeNeSaisQuoi: p2card.jeNeSaisQuoi,
    kookiness: p2card.kookiness,
    elusiveness: p2card.elusiveness,
    zeitgeistRelevance: p2card.zeitgeistRelevance,
  }
  const keys = Object.keys(obj) as Attribute[]
  const vals: number[] = Object.values(obj)
  const highest = Math.max(...vals)
  const possibilities: Attribute[] = keys.filter(
    (key, i) => vals[i] === highest
  )
  shuffleArray(possibilities)
  // return a string for the chosen attribute eg. ('jeNeSaisQuoi', 'kookiness', 'elusiveness', 'zeitgeistRelevance')
  return possibilities[0]
}

function didSomeoneWin(player1Deck: Deck, player2Deck: Deck): string {
  // using the 2 decks, evaluate if a player has won, then return one of the 4 expected strings:
  // ('player1', 'player2', 'draw', 'carry on')
  if (player1Deck.length && !player2Deck.length) {
    return 'player1'
  } else if (player2Deck.length && !player1Deck.length) {
    return 'player2'
  } else if (!player1Deck.length && !player2Deck.length) {
    return 'draw'
  } else {
    return 'carry on'
  }
}

function maintainPool(player1Deck: Deck, player2Deck: Deck, pool: Deck) {
  // all 3 parameters are arrays
  // take the first element of each deck array and add it to the pool array
  const [p1Top, ...p1Rest] = player1Deck
  const [p2Top, ...p2Rest] = player2Deck
  const newPool = [...pool, p1Top, p2Top]
  // update the deck arrays to no longer have the first element (preserve the order of the remaining cards)
  // return an array [player1Deck, player2Deck, pool]
  return [p1Rest, p2Rest, newPool]
}

/// Utility functions ///

function shuffleArray(array: Deck | Array<string>): void {
  // This is the Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
} // note, it doesn't return anything - it mutates the original array

function randomRange(myMin: number, myMax: number): number {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
} // returns a number between myMin and MyMax (inclusive)
