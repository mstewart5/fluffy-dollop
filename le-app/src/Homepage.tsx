import { Overlay, Container, Title, Button, Text, MantineProvider, Group, Badge } from '@mantine/core';
import classes from './css/Homepage.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <MantineProvider>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>Sharing Is Caring, a community service.</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Connect with your neighborhood, provide good turns for your neighbor, or request one.
          </Text>
          <Group>
            <Button variant="gradient" size="xl" radius="xl" className={classes.control} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="gradient" size="xl" radius="xl" className={classes.control} onClick={() => navigate('/register')}>
              Register
            </Button>
          </Group>

          {/* <Container size="lg" py="xl" className={classes.badge}> */}
            
            <Group justify="center" >
              <Badge variant="filled" size="lg" className={classes.badge}>

                Driven By You
              </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
              Become a beacon of your community
            </Title>

            <Text c="dimmed" className={classes.description} ta="left" mt="md">
              Mower just gave out? Sprinkler system faulty? Need dogsitting? We all find ourselves in a bit of a hiccup at times,
              that's why we built this website to make it easier than ever to connect with neighbors.
            </Text>
          {/* </Container> */}
        </Container>

      </div>
    </MantineProvider>
  );
}