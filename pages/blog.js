import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// step 1 == collect all the files from blogdata directory
// step 2 == Itrate throug the and display them

 
const Blog = () => {
  return (
    <>
      <main className={styles.mainblog}>
        <div className={styles.blogcontent}>
          <h2>Popular Blog</h2>
          <div className={styles.blogItem}>
            <Link href={"/BlogPost/javascript"}>
              <h3>How to Learn Javascript</h3>
            </Link>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
          <div className={styles.blogItem}>
          <Link href={"/BlogPost/Rectjs"}>
              <h3>How to Learn React js</h3>
            </Link>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>Next.js 13.3</h3>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>Next.js 13.3</h3>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>Next.js 13.3</h3>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>Next.js 13.3</h3>
            <p>
              Next.js 13.3 adds popular community-requested features and is the
              last release before the App Router is stable, including:
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
