import React from "react";
import Container from "../components/Container/Container";

import SearchBar from "../components/SearchBar/SearchBar";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import DisplayCollections from "../components/DisplayCollections/DisplayCollections";

export default function collectionsShowcase() {
    return (
        <Container maxWidth="lg">
            <h1>Collections</h1>

            {/* Search bar     */}
            <SearchBar />

            {/*Featued Collections */}
            <div style={{ paddingTop: "4rem" }}>
                <h1 style={{ textAlign: 'center' }}>Featured Collections</h1>
                <FeaturedCollections />
            </div>

            {/*Card Grid */}
            <div>
                <h1 style={{ textAlign: 'center' }}>Browse Collections</h1>
                <div>
                    <DisplayCollections/>
                </div>
                
            </div>
        </Container>
    );
}
