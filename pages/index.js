import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainblog}>
        <div className={styles.blogswrap}>
          <div className={styles.blogheading}>
            <h1>
              <span className="myHeading">Black Technology Blog </span>
            </h1>
            <div className={styles.entrymeta}>
              <span>April 23, 2023</span>
              <span>
                <a href="#" rel="category tag">
                  Technology
                </a>
              </span>
            </div>
            <div className={styles.imagewrap}>
              <Image
                className={styles.blogImage}
                src="/images/Black-Technolog-Img-2.jpg"
                width={640}
                height={427}
                alt="black-image1"
              />
            </div>
            <p>This is the file control system on next js</p>
          </div>
        </div>
        
      </main>
      <footer className={styles.footer}>
        Copyright © 2023 <Link href="http://localhost:3000/">Black Technology</Link>
      </footer>
    </>
  );
}
