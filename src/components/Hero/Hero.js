import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Img } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Sergei Laktyushin
        </SectionTitle>
        <SectionText>
        Welcome to my personal portfolio site, I'm a programmer and study at NRNU MEPHI student as program engineer.
        </SectionText>
      </LeftSection>
    </Section>
    <Section row nopadding>
        <Img src={'/images/foto.jpg'} />
    </Section>
  </>
);

export default Hero;