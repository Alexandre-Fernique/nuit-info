import { createContext } from 'react';
import Card from '../models/card';
import { Scenario } from '../types/scenario';

export interface GameContextType {
  scenario?: Scenario
  currentStep: number
  openCard: (card:Card)=>void
  moveToNextStep: () => void
}

const GameContext = createContext<GameContextType>({
  scenario: undefined,
  currentStep: 0,
  openCard: () => {},
  moveToNextStep: () => {}
});

export default GameContext;