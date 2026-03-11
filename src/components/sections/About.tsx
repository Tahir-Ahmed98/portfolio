import { Section } from '../layout/Section'
import { AboutContent } from '../about/AboutContent'
import { AboutStats } from '../about/AboutStats'
import { ABOUT } from '../../content/about'
import profileImage from '../../assets/mypic.png'

export function About() {
  return (
    <Section id="about">
      <AboutContent
        headline={ABOUT.headline}
        bio={ABOUT.bio}
        image={profileImage}
      />
      {ABOUT.stats?.length > 0 && <AboutStats stats={ABOUT.stats} />}
    </Section>
  )
}
