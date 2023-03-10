import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { ZOMBEZE_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(ZOMBEZE_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Container maxWidth="lg">
            <h1>Zombeze NFTs</h1>
            <p>Browse which Zombeze NFTs are available from the collection.</p>
            <NFTGrid
                data={data}
                isLoading={isLoading}
                emptyText={
                    "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
                }
            />
        </Container>
    );
}
