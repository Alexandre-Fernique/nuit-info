import { useTimer } from "react-timer-hook";


type GameTimerProps = {
  durationInMinutes: number
}

export default function GameTimer({durationInMinutes}: GameTimerProps) {
  const expiryTimestamp = new Date()
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + durationInMinutes)
  
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return <div>
    {`Temps restant ${minutes}:${seconds}`}
  </div>
}