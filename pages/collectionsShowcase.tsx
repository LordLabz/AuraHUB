import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";

import SearchBar from "../components/SearchBar/SearchBar";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import DisplayCollections from "../components/DisplayCollections/DisplayCollections";

import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function collectionsShowcase() {
    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Container maxWidth="lg">
            <h1>Collections</h1>

            {/* Search bar     */}
            <SearchBar />

            {/*Featued Collections */}
            <div style={{ paddingTop: "4rem"}}>
                <h1 style ={{textAlign:'center'}}>Featured Collections</h1>
                <FeaturedCollections />
            </div>

            {/*Card Grid */}
            <div >
            <h1 style ={{textAlign:'center'}}>Browse Collections</h1>
                <DisplayCollections />
            </div>


        </Container>
    );
}
