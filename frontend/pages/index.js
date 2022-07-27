import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    getFromBackend();
  }, []);

  async function getFromBackend() {
    const { data } = await axios.get("http://localhost:5000/", {
      method: "GET",
    });
    console.log(data.message);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fake BnB</title>
        <meta name="description" content="Created by Hannah Akhtar" />
        <link rel="icon" href="logo.png" />
      </Head>
      <h1>I WORK!</h1>
    </div>
  );
}
