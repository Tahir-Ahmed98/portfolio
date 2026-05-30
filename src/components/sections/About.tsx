import { Section } from "../layout/Section";
import { AboutContent } from "../about/AboutContent";
import { ABOUT } from "../../content/about";
import profileImage from "../../assets/mypic.png";

export function About() {
  return (
    <Section id="about">
      <AboutContent
        headline={ABOUT.headline}
        bio={ABOUT.bio}
        image={profileImage}
      />
    </Section>
  );
}
