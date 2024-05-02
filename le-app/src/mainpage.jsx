// if you hit f11 the text and buttons go to different spots
// naviagate to MakeOffer and MakeRequest
// 

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

  const[posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      axios
      .get("http://localhost:8080/post/get-offers")
      .then((response) => {
        setPosts(response.data)
        console.log("Fetched posts")
      })
      .catch((error) => {
        console.log(error)
      });
    }
    getPosts();
  }, [])
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

      <GridContainer posts={posts} />
      
      {/* <div className={styles.gridTitle2}>
        <h2>Share Requests</h2>
      </div>

      <GridContainer posts={posts} marginBottom="20px" /> */}

      <Button className={styles.button} onClick={() => goToPage("/makeoffer")}>Make Offer</Button>

      <Button className={styles.button2} onClick={() => goToPage("/request")}>Make Request</Button>
    </MantineProvider>
  );
}

export default Mainpage;