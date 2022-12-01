import Card from "../models/card"

export type Step = {
  cards: Card[],
}

export type Scenario = {
  steps: Step[]
}
