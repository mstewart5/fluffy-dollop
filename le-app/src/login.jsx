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
import React from 'react';
import classes from './login.module.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = "http://localhost:3000/register";
    navigate.push(path);
  }
  return (
    <MantineProvider defaultColorScheme='dark'>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Stinkies!
          </Title>

          <TextInput label="Username" placeholder="Hello" size="md"/>
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md"/>
          <Button onClick={() => {console.log("Hello")}} fullWidth mt="xl" size="md">
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