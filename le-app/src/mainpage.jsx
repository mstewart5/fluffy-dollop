import React, { useState, useEffect } from 'react';
import {
  MantineProvider,
  Title,
  Button,
  SimpleGrid,
  Group,
} from '@mantine/core';
import styles from './css/mainpage.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OfferContainer from './OfferContainer';
import HeaderSearch from './header';
import RequestContainer from './RequestContainer';
import ErrorPage from './ErrorPage';
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

  if (localStorage.getItem("username")) {
    return (
      <MantineProvider defaultColorScheme='dark'>
        <SimpleGrid cols={1} spacing="xs" verticalSpacing="xl">
          <HeaderSearch />

          <Group justify="flex-end" gap="lg">
            <Title order={2} align="center">Share Offers</Title>
            <Button className={styles.button} onClick={() => goToPage("/makeoffer")}>
              Make Offer
            </Button>
          </Group>

          <OfferContainer data={offers} />

          <Group justify="flex-end" gap="lg">
            <Title order={2} style={{ textAlign: 'center' }} >Share Requests</Title>
            <Button className={styles.button} onClick={() => goToPage("/request")}>
              Make Request
            </Button>
          </Group>

          <RequestContainer data={requests} />
        </SimpleGrid>

      </MantineProvider>
    );
  } else {
    return (
      <MantineProvider>
        <ErrorPage />
      </MantineProvider>
    )
  }
}

export default Mainpage;
