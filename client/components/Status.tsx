import { useState } from 'react'
import { ChooseAttribute } from './ChooseAttribute'
import { GameWinner } from './GameWinner'
import { RevealCard } from './RevealCard'
import { RoundWinner } from './RoundWinner'

interface StatusProps {
  humanTurn: boolean
  setHumanTurn: (humanTurn: boolean) => void
  setShowCards: (showCards: [boolean, boolean]) => void
}

type Message = 'chooseAttribute' | 'roundWinner' | 'gameWinner' | 'revealCard'

export function Status(props: StatusProps) {
  const { humanTurn, setHumanTurn } = props
  const [message, setMessage] = useState('chooseAttribute' as Message)

  function chooseAttribute(attribute: string) {}

  return (
    <>
      {message === 'chooseAttribute' && <ChooseAttribute />}
      {message === 'revealCard' && <RevealCard />}
      {message === 'roundWinner' && <RoundWinner />}
      {message === 'gameWinner' && <GameWinner />}
    </>
  )
}
