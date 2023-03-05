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
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroAsset2Frame}>
              <Image
                src="/exchange_hub_white.png"
                width={650}
                height={650}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
            </div>
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                Private Community Marketplace
              </h1>
              <p className={styles.heroSubtitle}>
                The first NFT marketplace to add utility to your NFTs.
              </p>
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/aura-sat.png"
              width={860}
              height={860}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/verified_partner_v2_white.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />

            <Image
              src="/1.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />

            <Image
              src="/2.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
