import ActionCard from "../components/action-card-test";
import {Scenario, Step } from "../types/scenario";

const mockStepOne: Step = {
  cards: [
  {
    title: "ClueCard1",
    description: "Oh you found a card",
    clue: "You are dumb!",
    children: (<ActionCard></ActionCard>)
  },
  {
    title: "ClueCard2",
    description: "Oh you found another card",
    clue: "You are even dumber!",
    children: (<ActionCard></ActionCard>)
  }
]}

const mockStepTwo: Step = {
  cards: [
  {
    title: "ClueCard3",
    description: "Oh you found a card",
    clue: "You are dumb!",
    children: (<ActionCard></ActionCard>)
  },
  {
    title: "ClueCard4",
    description: "Oh you found another card",
    clue: "You are even dumber!",
    children: (<ActionCard></ActionCard>)
  }
]}

const mockSteps: Step[] = [
  mockStepOne,
  mockStepTwo
]

const mockScenario: Scenario = {
  steps: mockSteps,
}

export default mockScenario