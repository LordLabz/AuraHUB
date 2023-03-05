import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>

          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-gradient.png"
              width={660}
              height={580}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  The Hub
                </span>
                <br />
                By Aura Exchange
              </h1>
              <p className={styles.heroSubtitle}>
                The first NFT marketplace to add utility to your NFTs.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/mint">
                  Mint Aura Pass
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://twitter.com/AuraExchange"
                  target="_blank"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
