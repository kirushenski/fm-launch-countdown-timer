import React from 'react'

interface SocialProps extends React.HTMLProps<HTMLAnchorElement> {
  name: string
  Icon: SvgrComponent
  link: string
}

function Social({ name, Icon, link, className = '', ...props }: SocialProps) {
  return (
    <a href={link} target="_blank" rel="nofollow noopener noreferrer" className={`${className}`} {...props}>
      <Icon title={name} />
    </a>
  )
}

export default Social
