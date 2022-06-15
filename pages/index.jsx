import React from "react";
import Link from "next/link"
import { Container } from "@chakra-ui/react";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <Container maxW="container.lg"  >
      <h1>
        Landing Page
        <br />
        <Link href="/app">
          App
        </Link>
      </h1>
    </Container>
   );
}

export default Home;
