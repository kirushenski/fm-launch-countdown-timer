import React, { useEffect, useState } from 'react'

interface CountProps extends React.HTMLProps<HTMLDivElement> {
  type: 'days' | 'hours' | 'minutes' | 'seconds'
  value: number
}

function Count({ type, value, className = '', ...props }: CountProps) {
  const [isShuffle, setIsShuffle] = useState(false)

  let nextValue = value - 1
  if ((type === 'seconds' || type === 'minutes') && value === 0) {
    nextValue = 59
  } else if (type === 'hours' && value === 0) {
    nextValue = 23
  }

  useEffect(() => {
    setIsShuffle(isShuffle => !isShuffle)
  }, [value])

  return (
    <div className={`${className}`} {...props}>
      <div className="relative h-card perspective mb-2 sm:mb-4 text-4xl sm:text-countdown text-primary-red tracking-tight">
        <div className="flex justify-center h-1/2 overflow-hidden bg-neutral-blue">
          <div className="flex transform translate-y-1/2">
            {`0${nextValue}`
              .slice(-2)
              .split('')
              .map((digit, index) => (
                <div key={index} className="w-digit">
                  {digit}
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center h-1/2 overflow-hidden bg-neutral-blue">
          <div className="flex transform -translate-y-1/2">
            {`0${value}`
              .slice(-2)
              .split('')
              .map((digit, index) => (
                <div key={index} className="w-digit">
                  {digit}
                </div>
              ))}
          </div>
        </div>
        <div
          className={`${
            isShuffle ? 'new-value' : 'old-value'
          } absolute left-0 right-0 animated-3d flex justify-center h-1/2 overflow-hidden bg-neutral-blue`}
        >
          <div className="flex transform">
            {`0${isShuffle ? nextValue : value}`
              .slice(-2)
              .split('')
              .map((digit, index) => (
                <div key={index} className="w-digit">
                  {digit}
                </div>
              ))}
          </div>
        </div>
        <div
          className={`${
            isShuffle ? 'old-value' : 'new-value'
          } absolute left-0 right-0 animated-3d flex justify-center h-1/2 overflow-hidden bg-neutral-blue`}
        >
          <div className="flex transform">
            {`0${isShuffle ? value : nextValue}`
              .slice(-2)
              .split('')
              .map((digit, index) => (
                <div key={index} className="w-digit">
                  {digit}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="uppercase text-countdown-text-mobile sm:text-sm tracking-countdown-text text-primary-blue">
        {type}
      </div>
    </div>
  )
}

export default Count
