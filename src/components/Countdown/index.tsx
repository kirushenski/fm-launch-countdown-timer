import React, { useState } from 'react'
import Count from '@/components/Count'
import useInterval from '@/utils/useInterval'

interface CountdownProps extends React.HTMLProps<HTMLDivElement> {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function Countdown({
  days: initialDays,
  hours: initialHours,
  minutes: initialMinutes,
  seconds: initialSeconds,
  className = '',
  ...props
}: CountdownProps) {
  const [isRunning, setIsRunning] = useState(true)
  const [days, setDays] = useState(initialDays)
  const [hours, setHours] = useState(initialHours)
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  useInterval(
    () => {
      let newSeconds, newMinutes, newHours, newDays
      newSeconds = seconds - 1
      if (newSeconds === -1) {
        newSeconds = 59
        newMinutes = minutes - 1
        if (newMinutes === -1) {
          newMinutes = 59
          newHours = hours - 1
          if (newHours === -1) {
            newHours = 23
            newDays = days - 1
            if (newDays === -1) {
              setIsRunning(false)
              return
            }
          }
        }
      }
      setSeconds(newSeconds)
      if (newMinutes !== undefined) setMinutes(newMinutes)
      if (newHours !== undefined) setHours(newHours)
      if (newDays !== undefined) setDays(newDays)
    },
    isRunning ? 1000 : null
  )

  return (
    <div className={`grid grid-cols-4 gap-4 sm:gap-8 ${className}`} {...props}>
      <Count type="days" value={days} />
      <Count type="hours" value={hours} />
      <Count type="minutes" value={minutes} />
      <Count type="seconds" value={seconds} />
    </div>
  )
}

export default Countdown
