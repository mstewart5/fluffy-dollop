import React from 'react';
import styles from './mainpage.module.css';
import { Paper, Grid, MantineProvider } from '@mantine/core';


function GridContainer({ posts, marginBottom }) {
  return (
    <MantineProvider>
      <Grid align='center'>
        <div className={styles.postsWrapper} style={{ marginTop: marginBottom }}>
          <div className={styles.grid}>
            {posts.map(post => (
              <Paper withBorder p='xl'>
              <Grid.Col span='content'>
              <div className={styles.col} key={post.id}>
                <div className={styles.post}>
                  <div className={styles.postDetails}>
                    <h2>{post.title}</h2>
                    {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                    <p>
                      <span>Author: {post.author}</span><br />
                      <span>Published Date: {post.publishedDate}</span>
                    </p>
                  </div>
                </div>
              </div>
              </Grid.Col>
              </Paper>
            ))}
          </div>
        </div>
      </Grid>
    </MantineProvider>
  );
}

export default GridContainer;

