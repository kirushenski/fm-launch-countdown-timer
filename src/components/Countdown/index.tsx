import React from 'react'
import Count from '../Count'

interface CountdownProps extends React.HTMLProps<HTMLDivElement> {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function Countdown({ days, hours, minutes, seconds, className = '', ...props }: CountdownProps) {
  return (
    <div className={`${className}`} {...props}>
      <Count name="days">{days}</Count>
      <Count name="hours">{hours}</Count>
      <Count name="minutes">{minutes}</Count>
      <Count name="seconds">{seconds}</Count>
    </div>
  )
}

export default Countdown
