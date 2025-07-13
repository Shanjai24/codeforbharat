import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Login = () => {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleTabChange = (_, newValue) => setTab(newValue);
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        // Save token, role, etc.
        localStorage.setItem('token', data.token);
        if (data.role === 'user') {
          window.location.href = '/user-dashboard';
        } else if (data.role === 'hospital') {
          window.location.href = '/hospital-dashboard';
        }
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };
  const handleGoogleLogin = () => {};

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={3} boxShadow={3} borderRadius={2} component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="User Login" />
        <Tab label="Vet Hospital Login" />
      </Tabs>
      <Box mt={2}>
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          {tab === 0 ? 'Login as User' : 'Login as Hospital'}
        </Button>
        {tab === 0 && (
          <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Login; 