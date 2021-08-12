import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! My name is <br />
        Dushime Bill Benon
      </SectionTitle>
      <SectionText>
        I am an open source developer and student at Rwanda Coding Academy. I am
        available to work on any project which you wish me to accompany with
        you.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
