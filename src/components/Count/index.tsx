import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

interface CountProps extends React.HTMLProps<HTMLDivElement> {
  type: 'days' | 'hours' | 'minutes' | 'seconds'
  value: number
}

function Count({ type, value, className = '', ...props }: CountProps) {
  const prevValue = useRef<number | null>(null)
  const cancelAnimation = prevValue.current === null || value === prevValue.current

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const springSettings = {
    config: { duration: 800 },
    reset: true,
    immediate: cancelAnimation,
  }

  const prevValueProps = useSpring({
    transform: cancelAnimation ? 'rotateX(0deg)' : 'rotateX(-180deg)',
    from: { transform: 'rotateX(0deg)' },
    ...springSettings,
  })

  const valueProps = useSpring({
    transform: cancelAnimation ? 'rotateX(180deg)' : 'rotateX(0deg)',
    from: { transform: 'rotateX(180deg)' },
    ...springSettings,
  })

  return (
    <div className={`${className}`} {...props}>
      <div className="h-card-wrapper bg-neutral-blue-darkest rounded-2xl mb-2 sm:mb-4">
        <div className="relative h-card perspective text-4xl sm:text-countdown text-primary-red tracking-tight">
          <div className="relative flex justify-center h-1/2 overflow-hidden bg-neutral-blue rounded-t-2xl">
            <div className="absolute inset-0 bg-neutral-black bg-opacity-15" />
            <div className="flex transform translate-y-1/2">
              {`0${value}`
                .slice(-2)
                .split('')
                .map((digit, index) => (
                  <div key={index} className="w-digit">
                    {digit}
                  </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-line bg-neutral-black bg-opacity-25" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative flex justify-center h-1/2 overflow-hidden bg-neutral-blue rounded-b-2xl">
            <div className="flex transform -translate-y-1/2">
              {`0${prevValue.current ?? value}`
                .slice(-2)
                .split('')
                .map((digit, index) => (
                  <div key={index} className="w-digit">
                    {digit}
                  </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform translate-x-1/2 -translate-y-1/2" />
          </div>
          <animated.div
            className="absolute top-0 left-0 right-0 animated-3d origin-bottom x-rotate-0 flex justify-center h-1/2 overflow-hidden bg-neutral-blue rounded-t-2xl"
            style={prevValueProps}
          >
            <div className="absolute inset-0 bg-neutral-black bg-opacity-15" />
            <div className="flex transform translate-y-1/2">
              {`0${prevValue.current ?? value}`
                .slice(-2)
                .split('')
                .map((digit, index) => (
                  <div key={index} className="w-digit">
                    {digit}
                  </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-line bg-neutral-black bg-opacity-25" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform translate-x-1/2 translate-y-1/2" />
          </animated.div>
          <animated.div
            className="absolute top-1/2 left-0 right-0 animated-3d origin-top x-rotate-180 flex justify-center h-1/2 overflow-hidden bg-neutral-blue rounded-b-2xl"
            style={valueProps}
          >
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
            <div className="absolute top-0 left-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform translate-x-1/2 -translate-y-1/2" />
          </animated.div>
        </div>
      </div>
      <div className="uppercase text-countdown-text-mobile sm:text-sm tracking-countdown-text text-primary-blue">
        {type}
      </div>
    </div>
  )
}

export default Count
