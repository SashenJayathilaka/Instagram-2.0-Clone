import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://drive.google.com/uc?export=download&id=1eqWbbCrvcw6w6W-3eCEFkDu-9L2MbRaH"
        />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
