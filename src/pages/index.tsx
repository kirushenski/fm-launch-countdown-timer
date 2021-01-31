import React from 'react'
import Seo from '@/components/Seo'
import Countdown from '@/components/Countdown'
import { ReactComponent as IconFacebook } from '@/icons/icon-facebook.svg'
import { ReactComponent as IconPinterest } from '@/icons/icon-pinterest.svg'
import { ReactComponent as IconInstagram } from '@/icons/icon-instagram.svg'
import Socials from '@/components/Socials'
import Social from '@/components/Social'

function IndexPage() {
  return (
    <main>
      <Seo title="Frontend Mentor: Launch countdown timer" />
      <h1>We’re launching soon</h1>
      <Countdown days={14} hours={0} minutes={0} seconds={0} />
      <footer>
        <h2 className="sr-only">Socials</h2>
        <Socials>
          <Social name="Facebook" Icon={IconFacebook} link="https://facebook.com" />
          <Social name="Pinterest" Icon={IconPinterest} link="https://pinterest.com" />
          <Social name="Instagram" Icon={IconInstagram} link="https://instagram.com" />
        </Socials>
      </footer>
    </main>
  )
}

export default IndexPage
