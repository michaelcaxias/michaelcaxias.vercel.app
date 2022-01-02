import React from 'react';

export default function SendEmail() {
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        E-mail
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="message">
        Mensagem
        <textarea name="name" id="name" />
      </label>
    </form>
  );
}
