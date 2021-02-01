import React from 'react'
import Seo from '@/components/Seo'
import Countdown from '@/components/Countdown'
import Socials from '@/components/Socials'
import Social from '@/components/Social'
import { ReactComponent as IconFacebook } from '@/icons/icon-facebook.svg'
import { ReactComponent as IconPinterest } from '@/icons/icon-pinterest.svg'
import { ReactComponent as IconInstagram } from '@/icons/icon-instagram.svg'

function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Frontend Mentor: Launch countdown timer" />
      <main className="flex-grow grid place-items-center bg-stars bg-no-repeat bg-cover mb-8 px-6 pt-33">
        <div className="max-w-container-mobile sm:max-w-container w-full text-center">
          <h1 className="uppercase text-lg sm:text-heading tracking-heading mb-13 sm:mb-26">We’re launching soon</h1>
          <Countdown days={14} hours={0} minutes={0} seconds={0} />
        </div>
      </main>
      <footer className="px-6 pt-24 sm:pt-25 pb-12 sm:pb-19 bg-hills bg-no-repeat bg-cover">
        <h2 className="sr-only">Socials</h2>
        <Socials>
          <Social name="Facebook" Icon={IconFacebook} link="https://facebook.com" />
          <Social name="Pinterest" Icon={IconPinterest} link="https://pinterest.com" />
          <Social name="Instagram" Icon={IconInstagram} link="https://instagram.com" />
        </Socials>
      </footer>
    </div>
  )
}

export default IndexPage
