import { Group, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './css/HeaderSearch.module.css';
export default function HeaderSearch() {
  const navigate = useNavigate();
  return (<header className={classes.header}>
    <div className={classes.inner}>
      <Group>
        <Title order={4}
          style={{ border: '8px solid #3A9BDC', borderRadius: '20px', background: '#3A9BDC', fontFamily: 'Consolas' }}>
          SharingIsCaring</Title>
      </Group>

      <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          <Text
            style={{ fontFamily: 'Consolas' }}
          >Welcome back: {localStorage.getItem("username")}
          </Text>
          <Button variant='filled' color='red'
            style={{ marginLeft: '10px', borderRadius: '10px' }}
            onClick={(logout) => {navigate('/'); localStorage.clear();}}>
            Log Out
          </Button>
        </Group>
      </Group>
    </div>
  </header>);
}