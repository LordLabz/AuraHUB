import React, { useState } from 'react';
import styles from './DisplayCollections.module.css';
import Image from 'next/image';

interface Element {
    id: number;
    name: string;
    imageUrl: string;
    pcmUrl: string;
}

const elements: Element[] = [
    {id: 0, name:'Aura Exchange', imageUrl:'https://ipfs.thirdwebcdn.com/ipfs/Qmaw79Y7SFDwj1HPHYAGer5uUCu46oYdk1SVuNb4dyzuKx/AURA%20(300%20%C3%97%20300%20px).png', pcmUrl:'https://www.auraexchange.org/mint'},
    { id: 1, name: 'BAPC', imageUrl: '/collectionsLogos/BAPC_Ape.png', pcmUrl: 'javascript:void(0)' },
    { id: 2, name: 'Casa De Luna', imageUrl: '/collectionsLogos/Casa_de_luna-White.png', pcmUrl: 'javascript:void(0)' },
    { id: 3, name: 'Copernic Space', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 4, name: 'DaMonkez', imageUrl: '/collectionsLogos/DaMonkez.png', pcmUrl: 'https://damonkez.auraexchange.org/' },
    { id: 5, name: 'Deluxe Goat', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 6, name: 'FourEighty', imageUrl: '/collectionsLogos/rust.gif', pcmUrl: 'https://foureighty.auraexchange.org/' },
    { id: 7, name: 'Guilty Bunnies', imageUrl: '/collectionsLogos/GuiltyBunnies.png', pcmUrl: 'javascript:void(0)' },
    { id: 8, name: 'illaz (Rug Rescue)', imageUrl: '/collectionsLogos/illaz.png', pcmUrl: 'https://illaz.auraexchange.org/' },
    { id: 9, name: 'KronicKatz', imageUrl: '/collectionsLogos/KronicKatz.png', pcmUrl: 'https://kronickatz.auraexchange.org/' },
    { id: 10, name: 'MAW', imageUrl: '/collectionsLogos/MAW logo.png', pcmUrl: 'javascript:void(0)' },
    { id: 11, name: 'Mentaverse', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 12, name: 'Molly', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 13, name: 'NFA', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 14, name: 'NFTSociety', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 15, name: 'NFT Unity', imageUrl: '/collectionsLogos/NFTUnity.png', pcmUrl: 'https://nft-unity.auraexchange.org/' },
    { id: 16, name: 'Nubis', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 17, name: 'One', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 18, name: 'PAYC', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 19, name: 'PAYC Legends', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 20, name: 'Mutant Payc', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 21, name: 'R.L.A.', imageUrl: '/collectionsLogos/RareLazyApepes.png', pcmUrl: 'https://rarelazyapepes.auraexchange.org/' },
    { id: 22, name: 'Serum Labz', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 23, name: 'Shibu Society', imageUrl: '/collectionsLogos/Shibu.png', pcmUrl: 'https://shibu.auraexchange.org/' },
    { id: 24, name: 'Tas2.0', imageUrl: '/collectionsLogos/tas.png', pcmUrl: 'http://tas2.auraexchange.org/' },
    { id: 25, name: 'WolfPunx NFT', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 26, name: 'X-Moose', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 27, name: 'Zombeze', imageUrl: '/collectionsLogos/zombeze.png', pcmUrl: 'https://zombeze.auraexchange.org/' },

];

const DisplayCollections = () => {
    const [visibleElements, setVisibleElements] = useState<Element[]>(elements.slice(0, 8));
    const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(elements.length > 8);


    const handleLoadMore = () => {
        const nextElements = elements.slice(0, visibleElements.length + 8);
        setVisibleElements(nextElements);
        setShowLoadMoreButton(elements.length > nextElements.length);
    };

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {visibleElements.map((element) => (
                    <div key={element.id}>
                        <a href={element.pcmUrl} target='_blank'>
                            <Image 
                            src={element.imageUrl} 
                            alt={element.name}
                            width={150}
                            height={150} />
                            <p>{element.name}</p>
                        </a>
                    </div>
                ))}
            </div>

            <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                {showLoadMoreButton && (
                    <button onClick={handleLoadMore} className={styles.secondaryCta}>Load More</button>
                )}
            </div>
        </>
    );
};

export default DisplayCollections;
