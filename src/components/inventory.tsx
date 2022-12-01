import { Stack } from "@mui/system"
import Card from "../models/card"
import InventoryCard from "./inventory-card"

export default function Inventory(props:{cards:Card[]}){
  const {cards} = props;
  return (
    <Stack direction='row' spacing={4}>
      {
        cards.map(card => <InventoryCard card={card} />)
      }
    </Stack>
  )
}