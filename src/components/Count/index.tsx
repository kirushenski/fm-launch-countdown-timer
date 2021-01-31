import React from 'react'

interface CountProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  name: string
}

function Count({ children, name, className = '', ...props }: CountProps) {
  return (
    <div className={`${className}`} {...props}>
      <div>{children}</div>
      <div>{name}</div>
    </div>
  )
}

export default Count
