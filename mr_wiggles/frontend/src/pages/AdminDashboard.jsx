import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const AdminDashboard = () => {
  const [message, setMessage] = useState('Loading...');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/hello/`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching message'));
  }, [backendUrl]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">{message}</Typography>
    </Container>
  );
};

export default AdminDashboard;
