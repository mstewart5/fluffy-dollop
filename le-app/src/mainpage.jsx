import React, { useState, useEffect } from 'react';
import { 
  MantineProvider, 
  Paper, 
  Title,
  Button
} from '@mantine/core';
import styles from './mainpage.module.css';
import GridContainer from './GridContainer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mainpage() {
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(page);
  };

  const [offers, setOffers] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const offersResponse = await axios.get("http://localhost:8080/post/get-offers");
        const requestsResponse = await axios.get("http://localhost:8080/post/get-requests");
        setOffers(offersResponse.data);
        setRequests(requestsResponse.data);
        console.log("Fetched posts");
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <MantineProvider defaultColorScheme='dark'>
      <div className={styles.wrapper}>
        <Paper className={styles.form} radius={0} p={2}>
          <Title order={2} className={styles.site} ta="center" mt="md" mb={2}>
            SharingIsCaring
          </Title>
        </Paper>
      </div>

      <div className={styles.gridTitle}>
        <h2>Share Offers</h2>
      </div>

      <GridContainer posts={offers} />

      <div className={styles.gridTitle}>
        <h2>Share Requests</h2>
      </div>

      <GridContainer posts={requests} />

      <div className={styles.buttons}>
        <Button className={styles.button} onClick={() => goToPage("/makeoffer")}>
          Make Offer
        </Button>
        <Button className={styles.button} onClick={() => goToPage("/request")}>
          Make Request
        </Button>
      </div>
    </MantineProvider>
  );
}

export default Mainpage;
