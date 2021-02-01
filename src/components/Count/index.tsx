import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import CountCard from '@/components/CountCard'

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

  const AnimatedCountCard = animated(CountCard)

  return (
    <div className={`${className}`} {...props}>
      <div className="h-card-wrapper-mobile sm:h-card-wrapper bg-neutral-blue-darkest rounded-2xl mb-2 sm:mb-4">
        <div className="relative h-card-mobile sm:h-card perspective text-4xl sm:text-countdown text-primary-red tracking-tight">
          <CountCard value={value} position="top" />
          <CountCard value={prevValue.current ?? value} position="bottom" />
          <AnimatedCountCard value={prevValue.current ?? value} position="top" isAnimated style={prevValueProps} />
          <AnimatedCountCard value={value} position="bottom" isAnimated style={valueProps} />
        </div>
      </div>
      <div className="uppercase text-countdown-text-mobile sm:text-sm tracking-countdown-text text-primary-blue">
        {type}
      </div>
    </div>
  )
}

export default Count
