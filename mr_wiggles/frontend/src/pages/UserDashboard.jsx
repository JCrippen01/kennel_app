import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const UserDashboard = () => {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Adjust according to how you store the token
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/hello/`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(err.message);
        setMessage('Error fetching message');
      }
    };

    fetchMessage();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        User Dashboard
      </Typography>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Typography variant="body1">{message}</Typography>
    </Container>
  );
};

export default UserDashboard;
