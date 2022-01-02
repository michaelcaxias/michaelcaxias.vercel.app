import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import ContactItem from './ContactItem';
import SendEmail from './SendEmail';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h1>Fale comigo!</h1>
      <section className="contact-info">
        <section className="send-email-section">
          <SendEmail />
        </section>
        <nav>
          <ul>
            <ContactItem icon={ <MdEmail /> } text="7michaeel7@gmail.com" />
            <ContactItem icon={ <BsFillTelephoneFill /> } text="(91) 9 9631-0510" />
            <ContactItem icon={ <HiLocationMarker /> } text="Belém, Pará, Brasil" />
          </ul>
        </nav>
      </section>
    </section>
  );
}
