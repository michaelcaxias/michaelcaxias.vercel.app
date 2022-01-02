import React from 'react';
import { TextField } from '@mui/material';

export default function SendEmail() {
  return (
    <form className="send-email">
      <TextField label="Nome" variant="filled" color="primary" />
      <TextField label="E-mail" variant="filled" color="primary" />
      <TextField
        label="Mensagem"
        variant="filled"
        color="primary"
        multiline
        rows={ 4 }
        maxRows={ 5 }
      />
    </form>
  );
}
