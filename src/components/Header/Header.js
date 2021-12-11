import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillMessage} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="#prices">
          <NavLink>Prices</NavLink>
        </Link>
      </li>     
    </Div2>
      <Div3>
          <SocialIcons href="https://t.me/lokt02">
            <AiFillMessage size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/lokt02">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/lokt02/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
