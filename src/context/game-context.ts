import { createContext } from 'react';
import Card from '../models/card';
import PointOfInterest from '../models/PointOfInterest';

export interface GameContextType {
  currentStep: number
  currentInventory: Card[]
  pointsOfInterest: PointOfInterest[]
  setCurrentInventory: React.Dispatch<React.SetStateAction<Card[]>>
  setPointsOfInterest: React.Dispatch<React.SetStateAction<PointOfInterest[]>>
  openCard: (card:Card)=>void
  moveToNextStep: () => void
}

const GameContext = createContext<GameContextType>({
  currentStep: 0,
  currentInventory: [],
  pointsOfInterest: [],
  setPointsOfInterest: () => {},
  setCurrentInventory: () => {},
  openCard: () => {},
  moveToNextStep: () => {}
});

export default GameContext;