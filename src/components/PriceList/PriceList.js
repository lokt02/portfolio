import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderTwo, HeaderThree, HeaderFour, Hr, TitleContent, TagList, Tag } from './PriceListStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { prices } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="prices">
    <SectionTitle main>Price List</SectionTitle>
    <GridContainer>
      {prices.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.name}</HeaderThree>
              <HeaderFour title>price: {p.cost}$</HeaderFour>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <CardInfo className="card-info">Includes: </CardInfo>
            <CardInfo className="card-info">
              <TagList>
                {p.inclusions.map((inclusion, i) => {
                  return (
                      <Tag>{inclusion}</Tag>
                  );
                })}
              </TagList>
            </CardInfo>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;