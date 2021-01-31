import React from 'react'

interface CountProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  name: string
}

function Count({ children, name, className = '', ...props }: CountProps) {
  return (
    <div className={`${className}`} {...props}>
      <div className="py-8 px-5 bg-neutral-blue mb-2 sm:mb-4 text-4xl sm:text-countdown text-primary-red tracking-tight">
        {`0${children}`.slice(-2)}
      </div>
      <div className="uppercase text-countdown-text-mobile sm:text-sm tracking-countdown-text text-primary-blue">
        {name}
      </div>
    </div>
  )
}

export default Count
