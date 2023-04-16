import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
//   console.log({slug});
  return <div>How to Use Keyword {slug}</div>;
};

export default slug;
