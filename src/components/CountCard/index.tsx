import React from 'react'

interface CountCardProps extends React.HTMLProps<HTMLDivElement> {
  value: number
  position: 'top' | 'bottom'
  isAnimated?: boolean
}

function CountCard({ value, position, isAnimated = false, className = '', ...props }: CountCardProps) {
  return (
    <div
      className={`flex justify-center h-1/2 overflow-hidden bg-neutral-blue ${
        isAnimated
          ? `absolute left-0 right-0 animated-3d ${
              position === 'top' ? 'top-0 origin-bottom x-rotate-0' : 'top-1/2 origin-top x-rotate-180'
            }`
          : 'relative'
      } ${position === 'top' ? 'rounded-t-2xl' : 'rounded-b-2xl'} ${className}`}
      {...props}
    >
      {position === 'top' && <div className="absolute inset-0 bg-neutral-black bg-opacity-15" />}
      <div className={`flex transform ${position === 'top' ? 'translate-y-1/2' : '-translate-y-1/2'}`}>
        {`0${value}`
          .slice(-2)
          .split('')
          .map((digit, index) => (
            <div key={index} className="w-digit-mobile sm:w-digit">
              {digit}
            </div>
          ))}
      </div>
      {position === 'top' && <div className="absolute bottom-0 left-0 right-0 h-line bg-neutral-black bg-opacity-25" />}
      <div
        className={`absolute left-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform -translate-x-1/2 ${
          position === 'top' ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'
        }`}
      />
      <div
        className={`absolute right-0 w-3 h-3 bg-neutral-blue-darkest rounded-full transform translate-x-1/2 ${
          position === 'top' ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'
        }`}
      />
    </div>
  )
}

export default CountCard
