import {
    ConnectWallet,
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useContractRead,
    useContractWrite,
    useOwnedNFTs,
    useTokenBalance,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFT/NFTCard";
import {
    ZOE_ERC1155_ADDRESS,
    ZOE_EDITION_STAKING_ADDRESS,
    ZOE_TOKEN_ADDRESS,
} from "../const/contractAddresses";
import styles from "../styles/Earn.module.css";

const Stake: NextPage = () => {
    const address = useAddress();
    const { contract: nftDropContract } = useContract(
        ZOE_ERC1155_ADDRESS,
        "edition-drop"
    );
    const { contract: tokenContract } = useContract(
        ZOE_TOKEN_ADDRESS,
        "token"
    );
    const { contract, isLoading } = useContract(ZOE_EDITION_STAKING_ADDRESS);
    const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    const { data: stakedTokens } = useContractRead(
        contract,
        "getStakeInfo",
        address
    );

    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            const stakeInfo = await contract?.call(
                "getStakeInfoForToken",
                0,
                address
            );
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards();
    }, [address, contract]);

    async function stakeNft(id: string) {
        if (!address) return;

        const isApproved = await nftDropContract?.isApproved(
            address,
            ZOE_EDITION_STAKING_ADDRESS
        );
        if (!isApproved) {
            await nftDropContract?.setApprovalForAll(ZOE_EDITION_STAKING_ADDRESS, true);
        }
        await contract?.call("stake", id, 1);
    }

    if (isLoading) {
        return <div className={styles.container}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Stake Your NFTs</h1>
            <hr className={`${styles.divider} ${styles.spacerTop}`} />

            {!address ? (
                <ConnectWallet />
            ) : (
                <>
                    <h2>Your Tokens</h2>
                    <div className={styles.tokenGrid}>
                        <div className={styles.tokenItem}>
                            <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                            <p className={styles.tokenValue}>
                                <b>
                                    {!claimableRewards
                                        ? "No rewards"
                                        : ethers.utils.formatUnits(claimableRewards, 18)}
                                </b>{" "}
                                {tokenBalance?.symbol}
                            </p>
                        </div>
                        <div className={styles.tokenItem}>
                            <h3 className={styles.tokenLabel}>Current Balance</h3>
                            <p className={styles.tokenValue}>
                                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                            </p>
                        </div>
                    </div>

                    <Web3Button
                        action={(contract) => contract.call("claimRewards", 0)}
                        contractAddress={ZOE_EDITION_STAKING_ADDRESS}
                    >
                        Claim Rewards
                    </Web3Button>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                    <h2>Your Staked NFTs</h2>
                    <div className={styles.nftBoxGrid}>
                        {stakedTokens &&
                            stakedTokens[0]?.map((stakedToken: BigNumber) => (
                                <NFTCard
                                    tokenId={stakedToken.toNumber()}
                                    key={stakedToken.toString()}
                                />
                            ))}
                    </div>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                    <h2>Your Unstaked NFTs</h2>
                    <div className={styles.nftBoxGrid}>
                        {ownedNfts?.map((nft) => (
                            <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                    className={styles.nftMedia}
                                />
                                <h3>{nft.metadata.name}</h3>
                                <Web3Button
                                    contractAddress={ZOE_EDITION_STAKING_ADDRESS}
                                    action={() => stakeNft(nft.metadata.id)}
                                >
                                    Stake
                                </Web3Button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Stake;