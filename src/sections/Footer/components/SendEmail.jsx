import React from 'react';
import { TextField } from '@mui/material';
import { ButtonPrimary } from '../../../styles/index';

export default function SendEmail() {
  return (
    <form className="send-email">
      <TextField
        label="Nome"
        variant="filled"
      />
      <TextField
        label="E-mail"
        variant="filled"
      />
      <TextField
        label="Mensagem"
        variant="filled"
        multiline
        rows={ 4 }
        maxRows={ 5 }
      />
      <ButtonPrimary>Enviar</ButtonPrimary>
    </form>
  );
}
