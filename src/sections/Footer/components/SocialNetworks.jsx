import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function SocialNetworks() {
  return (
    <footer>
      <nav>
        <a
          href="https://www.instagram.com/michaelcaxias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://br.linkedin.com/in/michaelcaxias"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/michaelcaxias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </nav>
      <p>2021 Ⓒ Desenvolvido por Michael Caxias</p>
    </footer>
  );
}
