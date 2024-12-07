import React from 'react';
    import { Button, Container, Typography } from '@mui/material';
    import { useAuth } from '../auth/useAuth';

    const Login: React.FC = () => {
      const { login } = useAuth();

      return (
        <Container maxWidth="sm" style={{ marginTop: '100px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Log in with Google
          </Typography>
          <Button variant="contained" color="primary" onClick={login}>
            Sign in with Google
          </Button>
        </Container>
      );
    };

    export default Login;
