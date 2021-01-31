import React from 'react'

interface SocialsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Socials({ children, className = '', ...props }: SocialsProps) {
  return (
    <ul className={`${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Socials
