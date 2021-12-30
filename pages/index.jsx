import React from "react";
import styles from "../styles/Home.module.scss";

import Link from "next/link"

const Home = () => {
  return ( 
    <h1>
      Landing Page
      <br />
      <Link href="/app">
        App
      </Link>
    </h1>
   );
}

export default Home;
