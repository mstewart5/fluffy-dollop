import { 
  Paper, 
  TextInput, 
  PasswordInput, 
  Checkbox, 
  Button, 
  Title, 
  Text, 
  Anchor, 
  MantineProvider,
} from '@mantine/core';
import React, { useState } from 'react';
import classes from './login.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = "http://localhost:3000/register";
    navigate(path);
  }

  const handleSubmit = async (e) => { // TODO: secure mainpage. deny access if no sessionId from backend.
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/login", {username:username, password:password})
      .then((response) => {
        console.log("Logged in")
        const sessionId = response.data;
        document.cookie = `sessionId=${sessionId}; path=/;`
        navigate("/mainpage")
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }

  return (
    <MantineProvider defaultColorScheme='dark'>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to SharingIsCaring!
          </Title>

          <TextInput label="Username" placeholder="Your username" size="md" onChange={e => setUsername(e.target.value)}/>
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={e => setPassword(e.target.value)}/>
          <Button onClick={handleSubmit} fullWidth mt="xl" size="md">
            Login
          </Button>

          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Anchor href="http://localhost:3000/register" fw={700} onClick={(routeChange)}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    </MantineProvider>
  );
}
export default Login;