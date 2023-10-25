import React from 'react';
import { TextField, Button } from '@mui/material';

const EmailForm: React.FC = () => {
  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to send email
  };

  return (
    <form onSubmit={sendEmail}>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Button type="submit" variant="contained">
        Send Email
      </Button>
    </form>
  );
};

export default EmailForm;