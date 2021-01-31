import React from 'react'

interface SocialProps extends React.HTMLProps<HTMLAnchorElement> {
  name: string
  Icon: SvgrComponent
  link: string
}

function Social({ name, Icon, link, className = '', ...props }: SocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`text-primary-blue hover:text-primary-red focus-visible:text-primary-red transition-colors ${className}`}
      {...props}
    >
      <Icon title={name} fill="currentColor" />
    </a>
  )
}

export default Social
