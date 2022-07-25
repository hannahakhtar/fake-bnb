import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fake BnB</title>
        <meta name="description" content="Created by Hannah Akhtar" />
        <link rel="icon" href="logo.png" />
      </Head>    
      <h1>Hello World</h1>
      <h2>Test comment</h2>
    </div>
  )
}
