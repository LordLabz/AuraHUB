import React, { useState } from "react";
import styles from "./SearchBar.module.css"

import Image from "next/image";

interface Element {
    id: number;
    name: string;
    imageUrl: string;
    pcmUrl: string;
}

const elements: Element[] = [
    {id: 0, name:'Aura Exchange', imageUrl:'https://ipfs.thirdwebcdn.com/ipfs/Qmaw79Y7SFDwj1HPHYAGer5uUCu46oYdk1SVuNb4dyzuKx/AURA%20(300%20%C3%97%20300%20px).png', pcmUrl:'https://www.auraexchange.org/mint'},
    { id: 1, name: 'BAPC', imageUrl: '/collectionsLogos/BAPC_Ape.png', pcmUrl: '/comingSoon' },
    { id: 2, name: 'Casa De Luna', imageUrl: '/collectionsLogos/Casa_de_luna-White.png', pcmUrl: '/comingSoon' },
    { id: 3, name: 'Copernic Space', imageUrl: '/collectionsLogos/Copernic_space.png', pcmUrl: '/comingSoon' },
    { id: 4, name: 'DaMonkez', imageUrl: '/collectionsLogos/DaMonkez.png', pcmUrl: 'https://damonkez.auraexchange.org/' },
    { id: 5, name: 'Deluxe Goat', imageUrl: '/collectionsLogos/Deluxe Labs Logo.png', pcmUrl: '/comingSoon' },
    { id: 6, name: 'FourEighty', imageUrl: '/collectionsLogos/rust.gif', pcmUrl: 'https://foureighty.auraexchange.org/' },
    { id: 7, name: 'Guilty Bunnies', imageUrl: '/collectionsLogos/GuiltyBunnies.png', pcmUrl: '/comingSoon' },
    { id: 8, name: 'illaz (Rug Rescue)', imageUrl: '/collectionsLogos/illaz.png', pcmUrl: 'https://illaz.auraexchange.org/' },
    { id: 9, name: 'KronicKatz', imageUrl: '/collectionsLogos/KronicKatz.png', pcmUrl: 'https://kronickatz.auraexchange.org/' },
    { id: 10, name: 'MAW', imageUrl: '/collectionsLogos/MAW logo.png', pcmUrl: '/comingSoon' },
    { id: 11, name: 'Mentaverse', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 12, name: 'Molly', imageUrl: '/collectionsLogos/MollyNFT.png', pcmUrl: 'http://molly.auraexchange.org/' },
    { id: 13, name: 'NFA', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 15, name: 'NFT Unity', imageUrl: '/collectionsLogos/NFTUnity.png', pcmUrl: 'https://nft-unity.auraexchange.org/' },
    { id: 16, name: 'Nubis', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 17, name: 'One', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 18, name: 'PAYC', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 19, name: 'PAYC Legends', imageUrl: '/collectionsLogos/PAYCLegendsLogo.png', pcmUrl: '/comingSoon' },
    { id: 20, name: 'Mutant Payc', imageUrl: '/collectionsLogos/PAYCMutantLogo.png', pcmUrl: '/comingSoon' },
    { id: 21, name: 'R.L.A.', imageUrl: '/collectionsLogos/RareLazyApepes.png', pcmUrl: 'https://rarelazyapepes.auraexchange.org/' },
    { id: 22, name: 'Serum Labz', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 23, name: 'Shibu Society', imageUrl: '/collectionsLogos/Shibu.png', pcmUrl: 'https://shibu.auraexchange.org/' },
    { id: 24, name: 'Tas2.0', imageUrl: '/collectionsLogos/tas.png', pcmUrl: 'http://tas2.auraexchange.org/' },
    { id: 24, name: 'WolfPunx NFT', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 24, name: 'X-Moose', imageUrl: '/comingSoon.png', pcmUrl: '/comingSoon' },
    { id: 27, name: 'Zombeze', imageUrl: '/collectionsLogos/zombeze.png', pcmUrl: 'https://zombeze.auraexchange.org/' },
];

export default function SearchBar() {
    const [filteredData, setFilteredData] = useState<Element[]>([]);

    const handleSearch = (searchTerm: string) => {
        const filtered = elements.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filtered.length)
        if (searchTerm != '')
            setFilteredData(filtered);
        else{
            setFilteredData([])
        }
    }

    return (
        <>
            <form className={styles.container}>
                <input type="search"
                    className={styles.input}
                    placeholder="Search Collections"
                    onChange={e => {
                        handleSearch(e.target.value);
                    }} />
                <span className={styles.icon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        style={{ fill: "white" }}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                        />
                    </svg>
                </span>
            </form>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} >
                {filteredData.map(item => (
                    <div>
                        <div key={item.id}>
                            <a href={item.pcmUrl} target='_blank'>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={150}
                                    height={150} />
                                <p>{item.name}</p>
                            </a>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}