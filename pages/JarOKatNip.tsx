import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Stake.module.css";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <h1 className={styles.h1}>KatNip Staking Vault</h1>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/MintKatNip`)}
                >
                    {/* Mint a new NFT */}
                    <img src={`/icons/claim.png`} alt="drop" />
                    <h2 className={styles.selectBoxTitle}>Claim</h2>
                    <p className={styles.selectBoxDescription}>
                        Every Kat holder is eligible to claim ONE free Jar -O- KatNip for
                        every TWO Katz they own. Claim based off snapshot token 12/04/22.
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/StakeKatNip`)}
                >
                    {/* Staking an NFT */}
                    <img src={`/icons/stake.png`} alt="drop" />
                    <h2 className={styles.selectBoxTitle}>Cure</h2>
                    <p className={styles.selectBoxDescription}>
                        Once youve claimed your <b>Jar -O- KatNip</b> NFT return here to
                        enter the vault.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Home;