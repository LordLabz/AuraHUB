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
    { id: 1, name: 'BAPC', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 2, name: 'Casa De Luna', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 3, name: 'Copernic Space', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 4, name: 'DaMonkez', imageUrl: '/collectionsLogos/DaMonkez.png', pcmUrl: 'https://damonkez.auraexchange.org/' },
    { id: 5, name: 'Deluxe Goat', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 6, name: 'FourEighty', imageUrl: '/collectionsLogos/rust.gif', pcmUrl: 'https://foureighty.auraexchange.org/' },
    { id: 7, name: 'Guilty Bunnies', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 8, name: 'Hawtheadzz', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 9, name: 'illaz (Rug Rescue)', imageUrl: '/collectionsLogos/illaz.png', pcmUrl: 'https://illaz.auraexchange.org/' },
    { id: 10, name: 'KronicKatz', imageUrl: '/collectionsLogos/KronicKatz.png', pcmUrl: 'https://kronickatz.auraexchange.org/' },
    { id: 11, name: 'MAW', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 12, name: 'Mentaverse', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 13, name: 'Molly', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 14, name: 'NFA', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 15, name: 'NFTSociety', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 16, name: 'Nubis', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 17, name: 'One', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 17, name: 'PAYC', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 17, name: 'PAYC Legends', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 17, name: 'Mutant Payc', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 18, name: 'R.L.A.', imageUrl: '/collectionsLogos/RareLazyApepes.png', pcmUrl: 'https://rarelazyapepes.auraexchange.org/' },
    { id: 19, name: 'Serum Labz', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 20, name: 'Shibu Society', imageUrl: '/collectionsLogos/Shibu.png', pcmUrl: 'https://shibu.auraexchange.org/' },
    { id: 21, name: 'Tas2.0', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 22, name: 'WolfPunx NFT', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 23, name: 'X-Moose', imageUrl: 'https://via.placeholder.com/150', pcmUrl: 'javascript:void(0)' },
    { id: 24, name: 'Zombeze', imageUrl: '/collectionsLogos/zombeze.png', pcmUrl: 'https://zombeze.auraexchange.org/' },

];

const ElementsGrid = () => {
    const [visibleElements, setVisibleElements] = useState<Element[]>(elements.slice(0, 8));
    const [showLoadMoreButton, setShowLoadMoreButton] = useState<boolean>(elements.length > 8);

    const handleLoadMore = () => {
        const nextElements = elements.slice(0, visibleElements.length + 8);
        setVisibleElements(nextElements);
        setShowLoadMoreButton(elements.length > nextElements.length);
    };

    console.log(elements[3])

    console.log(showLoadMoreButton)
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {visibleElements.map((element) => (
                    <div key={element.id}>
                        <a href={element.pcmUrl}>
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

export default ElementsGrid;
