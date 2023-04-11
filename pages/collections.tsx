import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Earn.module.css";

export default function Stake() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <h1 className={styles.h1}>Collections baby</h1>
            <div className={styles.nftBoxGrid}>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/Aura`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/Aura.png" alt="Aura" width={350} height={300} />
                    <h2 className={styles.selectBoxTitle}>Aura</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/KronicKatz`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/kk.png" alt="KronicKatz" width={300} height={300} />
                    <h2 className={styles.selectBoxTitle}>KronicKatz</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/Zombeze`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/Zombeze.png" alt="Zombeze" width={300} height={300} />
                    <h2 className={styles.selectBoxTitle}>Zombeze</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/Shibu`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/Shibu.png" alt="Shibu" width={300} height={300} />
                    <h2 className={styles.selectBoxTitle}>Shibu</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/MAW`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/MAW.png" alt="MAW" width={300} height={300} />
                    <h2 className={styles.selectBoxTitle}>MAW</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
            </div>

        </div>
    );
};