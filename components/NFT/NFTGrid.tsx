import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React from "react";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
}: Props) {
  const customOrder = ["0", "5", "2", "3", "4"];

  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(5)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data
          .filter((nft) => nft.metadata.id !== "1")
          .sort((a, b) => {
            const aIndex = customOrder.indexOf(a.metadata.id);
            const bIndex = customOrder.indexOf(b.metadata.id);

            if (aIndex === -1 && bIndex === -1) {
              return 0;
            }
            if (aIndex === -1) {
              return 1;
            }
            if (bIndex === -1) {
              return -1;
            }
            return aIndex - bIndex;
          })
          .map((nft) =>
            !overrideOnclickBehavior ? (
              <Link
                href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
                key={nft.metadata.id}
                className={styles.nftContainer}
              >
                <NFT nft={nft} />
              </Link>
            ) : (
              <div
                key={nft.metadata.id}
                className={styles.nftContainer}
                onClick={() => overrideOnclickBehavior(nft)}
              >
                <NFT nft={nft} />
              </div>
            )
          )
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}
