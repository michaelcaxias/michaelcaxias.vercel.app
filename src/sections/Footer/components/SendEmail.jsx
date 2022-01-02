import React from 'react';
import { TextField } from '@mui/material';
import { ButtonPrimary } from '../../../styles/index';

export default function SendEmail() {
  return (
    <form className="send-email">
      <TextField
        className="textfield"
        label="Nome"
        variant="filled"
      />
      <TextField
        className="textfield"
        label="E-mail"
        variant="filled"
        color="secondary"
      />
      <TextField
        className="textfield"
        label="Mensagem"
        variant="filled"
        color="secondary"
        multiline
        rows={ 4 }
        maxRows={ 5 }
      />
      <ButtonPrimary>Enviar</ButtonPrimary>
    </form>
  );
}
