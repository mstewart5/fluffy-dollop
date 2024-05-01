// if you hit f11 the text and buttons go to different spots
// naviagate to MakeOffer and MakeRequest
// 

import React from 'react';
import { 
  MantineProvider, 
  Paper, 
  Title,
  Button
} from '@mantine/core';
import styles from './mainpage.module.css';
import GridContainer from './GridContainer';

function Mainpage({ posts }) {
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
      
      <div className={styles.gridTitle2}>
        <h2>Share Requests</h2>
      </div>

      <GridContainer posts={posts} marginBottom="20px" />

      <Button className={styles.button}>Make Offer</Button>

      <Button className={styles.button2}>Make Request</Button>
    </MantineProvider>
  );
}

export default Mainpage;