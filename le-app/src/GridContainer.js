import React from 'react';
import styles from './mainpage.module.css';

function GridContainer({ posts, marginBottom }) {
  return (
    <div className={styles.postsWrapper} style={{ marginTop: marginBottom }}>
      <div className={styles.grid}>
        {posts.map(post => (
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
        ))}
      </div>
    </div>
  );
}

export default GridContainer;

