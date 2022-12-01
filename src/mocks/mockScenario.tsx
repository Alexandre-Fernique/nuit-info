import ActionCard from "../components/action-card-test";
import Card from "../models/card";
import {Scenario, Step } from "../types/scenario";

const mockCard = new Card(
  1, "Clés", "Oh you found a card", 'indice', (<ActionCard></ActionCard>), 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
)

const mockStepOne: Step = {
  cards: [
    new Card(
      1, "Clés", "Oh you found a card", 'indice', (<ActionCard></ActionCard>),'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    ),
    new Card(
      2, "Coffre", "Oh you found a card", 'indice', (<ActionCard></ActionCard>), 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    )
]}

const mockStepTwo: Step = {
  cards: [
    new Card(
      3, "ClueCard3", "Oh you found a card", 'indice', (<ActionCard></ActionCard>), 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    ),
    new Card(
      4, "ClueCard4", "Oh you found a card", 'indice', (<ActionCard></ActionCard>), 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    )
  ]
}

const mockSteps: Step[] = [
  mockStepOne,
  mockStepTwo
]

const mockScenario: Scenario = {
  steps: mockSteps,
}

export {mockScenario, mockCard}