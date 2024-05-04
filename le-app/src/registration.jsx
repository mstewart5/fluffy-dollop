import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Stack,
  Center,
  MantineProvider,
  Notification,
} from '@mantine/core';
import axios from 'axios';
import classes from './css/registration.module.css';


function Registration() {
      const navigate = useNavigate();
      const [username, setName] = useState('');
      const [password, setPassword] = useState('');
      const [showSuccessNotif, setSucessNotif] = useState(false);
      const [showFailureNotif, setFailureNotif] = useState(false);
      const handleSubmit = async (e) => {
        e.preventDefault();
        
          axios
          .post("http://localhost:8080/user/signup", {username:username, password:password})
          .then(() => {
            console.log("Success")
            setSucessNotif(true)
            setTimeout(() => {navigate('/login')}, 3000);
          })
          .catch((error) => {
            console.log(error)
            setFailureNotif(true)
          });

     }

  return (
    <MantineProvider defaultColorScheme='dark'>
      <div className={classes.background}>
    <Center>
    <Paper radius="md" p="xl" withBorder className={classes.login}>
      <Text size="lg" fw={500}>
        Welcome to SharingIsCaring, register with
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack>
          {/* {type === 'register' && */ (
            <TextInput
              required
              label="Name"
              placeholder="Your name"
              value={username}
              onChange={(e) => setName(e.target.value)}
             // value={form.values.name}
             // onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          {/* <TextInput
            required
            label="Username"
            placeholder="Your name"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          /> */}

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //value={form.values.password}
            //onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            //error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />


        </Stack>

        <Group justify="space-between" mt="xl">
          <Button type="submit" radius="xl">
            {upperFirst("Register")}
          </Button>
        </Group>

        {showSuccessNotif && (
          <Notification className={classes.notif} title='Registered' color='teal' onClose={() => setSucessNotif(false)}>
            Thank you for registering an account!<br></br>
            Redirecting to main page... 
          </Notification> // TODO: redirect to main page.
        )}

        {
          showFailureNotif && (
            <Notification title='Registration error!' color='red' onClose={() => setFailureNotif(false)}>
              Registration failed.<br></br>
              Make sure your username is unique.<br></br>
              Otherwise, try again.
            </Notification>
          )
        }
      </form>
    </Paper>
    </Center>
    </div>
    </MantineProvider>
  );
}
export default Registration;