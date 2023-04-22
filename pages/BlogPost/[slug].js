import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main className={styles.mainblog}>
      <div className={styles.blogcontent}>
        <h1>how to learn {slug}</h1>
        <div className={styles.contentmain}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusamus cumque totam delectus iste reiciendis similique autem, temporibus ipsam assumenda voluptas est numquam molestiae magni, modi doloremque perspiciatis earum nemo quibusdam aspernatur quod soluta consectetur itaque officiis! Error cumque, corporis labore cupiditate adipisci alias facere dolorum fugit quia officiis officia suscipit commodi! Dicta quaerat autem dolorem enim debitis, dolore aperiam nostrum explicabo, atque quia similique animi quos molestias ipsum magni dignissimos mollitia adipisci minus praesentium? Velit perspiciatis unde quis voluptates odio. Accusantium nostrum inventore tempore id, eos architecto nesciunt deleniti fugit asperiores deserunt animi ex nam esse quam eius nobis.</p>
        </div>
        {/* <div>How to Use Keyword {slug}</div> */}
        </div>
      </main>
    </>
  );
};

export default slug;
