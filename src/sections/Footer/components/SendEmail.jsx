import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { ButtonPrimary } from '../../../styles/index';

export default function SendEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="send-email">
      <TextField
        label="Nome"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
        variant="filled"
      />
      <TextField
        label="E-mail"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
        variant="filled"
      />
      <TextField
        label="Mensagem"
        value={ message }
        variant="filled"
        onChange={ ({ target: { value } }) => setMessage(value) }
        multiline
        rows={ 4 }
        maxRows={ 5 }
      />
      <ButtonPrimary>Enviar</ButtonPrimary>
    </form>
  );
}
