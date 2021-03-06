import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillMessage } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:926-685-3213">+7 926-685-3213</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lokt0234gmail.com">
            lokt0234gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://t.me/lokt02">
            <AiFillMessage size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/lokt02">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/lokt02/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
