import { Stack, Button, Title, Text, MantineProvider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
export default function ErrorPage() {
  const navigate = useNavigate();
    return (
      <MantineProvider>
      <Stack justify='center' align='center'>
        <Title>401</Title>
        <Title>Unauthorized</Title>
        <Text>You're not logged in</Text>
        <Button variant='subtle' onClick={() => navigate('/')}>Take me back to the home page</Button>
      </Stack>
      </MantineProvider>
    );
}
