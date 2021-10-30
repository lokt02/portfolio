import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Education, Age } from '../../constants/constants';

const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle><br/>About Me</SectionTitle>
      <SectionText>
        I am {Age}, live in Russian Federation and I am very interested in IT technologies. 
      My hobby is game development and participating in game jams. <br/><br/>
      <strong>Education: {Education}</strong>
      </SectionText>
    </Section>
  );
};

export default Timeline;
