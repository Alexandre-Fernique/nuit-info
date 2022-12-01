
export type Card = {
  title: string
  description: string
  clue: string;
  children: JSX.Element
}

export type Step = {
  cards: Card[],
}

export type Scenario = {
  steps: Step[]
}
