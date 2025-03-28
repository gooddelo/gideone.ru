import Image from "next/image";
import styles from "./page.module.scss";

import Header from "@/components/Header/Header";
import MainBanner from "@/components/MainBanner/MainBanner";
import About from "@/components/About/About";
import Prices from "@/components/Prices/Prices";
import FAQ from "@/components/FAQ/FAQ";
import Feedback from "@/components/Feedback/Feedback";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
      <main className={styles.main}>
        <MainBanner />
        <About />
        <Prices />
        <FAQ />
        <Feedback />
        <Contacts />
      </main>
  );
}
