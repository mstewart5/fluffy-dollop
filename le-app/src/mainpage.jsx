import {  
  MantineProvider, 
  Paper, 
  Title 
} from '@mantine/core';
import styles from './mainpage.module.css';


function Mainpage({ posts }) {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <div className={styles.wrapper}>
        <Paper className={styles.form} radius={0} p={2}>
          <Title order={2} className={styles.title} ta="center" mt="md" mb={2}>
            SharingIsCaring
          </Title>
        </Paper>
      </div>

      <div className={styles.postsWrapper}>
        <div className={styles.grid}>
          {posts.map(post => (
            <div className={styles.col} key={post.id}>
              <div className="post">
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="post-details">
                  <span>Author: {post.author}</span>
                  <span>Published: {post.publishedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MantineProvider>
  );
}


  export default Mainpage;