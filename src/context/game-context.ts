import { createContext } from 'react';
import Card from '../models/card';
import PointOfInterest from '../models/PointOfInterest';

export interface GameContextType {
  currentStep: number
  currentInventory: Card[]
  pointsOfInterest: PointOfInterest[]
  isSuccessDialogVisible: boolean
  setCurrentInventory: React.Dispatch<React.SetStateAction<Card[]>>
  setPointsOfInterest: React.Dispatch<React.SetStateAction<PointOfInterest[]>>
  setIsSuccessDialogVisible: React.Dispatch<React.SetStateAction<boolean>>
  openCard: (card:Card)=>void
  closeCard: () => void
  moveToNextStep: () => void
}

const GameContext = createContext<GameContextType>({
  currentStep: 0,
  currentInventory: [],
  pointsOfInterest: [],
  isSuccessDialogVisible: false,
  setPointsOfInterest: () => {},
  setCurrentInventory: () => {},
  setIsSuccessDialogVisible: () => {},
  openCard: () => {},
  closeCard: () => {},
  moveToNextStep: () => {}
});

export default GameContext;