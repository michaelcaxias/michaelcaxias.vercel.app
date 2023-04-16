import React from 'react';
import Contact from './components/Contact';
import SocialNetworks from './components/SocialNetworks';
import FooterStyle from './styles';

export default function Footer() {
  return (
    <FooterStyle>
      <Contact />
      <SocialNetworks />
    </FooterStyle>
  );
}
