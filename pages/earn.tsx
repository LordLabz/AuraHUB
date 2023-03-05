import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Earn.module.css";

export default function Stake() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <h1 className={styles.h1}>CryoVault</h1>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/defi_staking`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/baked.png" alt="drop" width={200} height={200} />
                    <h2 className={styles.selectBoxTitle}>$BAKED to $ZOE</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/ZombezeStaking`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/ZOE.png" alt="drop" width={200} height={200} />
                    <h2 className={styles.selectBoxTitle}>Zombeze Vault</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
            </div>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/`)}
                >
                    {/* Staking an NFT */}
                    <Image src="/$MTEC.png" alt="token" width={150} height={150} />
                    <h2 className={styles.selectBoxTitle}>$MTEC to $ZOE</h2>
                    <h2 className={styles.selectBoxTitle}>Coming Soon</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/`)}
                >
                    {/* Staking an NFT */}
                    <Image src="/5k.gif" alt="token" width={150} height={150} />
                    <h2 className={styles.selectBoxTitle}>Zoe NFT Drop Vault</h2>
                    <h2 className={styles.selectBoxTitle}>Coming Soon</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
            </div>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/mawne.png" alt="drop" width={150} height={150} />
                    <h2 className={styles.selectBoxTitle}>$MAWNEY for $ZOE</h2>
                    <h2 className={styles.selectBoxTitle}>Coming Soon</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/JarOKatNip`)}
                >
                    {/* Staking an NFT */}
                    <Image src="/kk.png" alt="token" width={200} height={200} />
                    <h2 className={styles.selectBoxTitle}>Jar-O-Katnip</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
            </div>

        </div>
    );
};
