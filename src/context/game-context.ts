import { createContext } from 'react';
import { Scenario } from '../types/scenario';

export interface GameContextType {
  scenario?: Scenario
  currentStep: number
  moveToNextStep: () => void
}

const GameContext = createContext<GameContextType>({
  scenario: undefined,
  currentStep: 0,
  moveToNextStep: () => {}
});

export default GameContext;