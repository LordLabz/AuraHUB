import React, { useEffect } from "react";
import styles from "./FeaturedCollections.module.css"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

export default function FeaturedCollections() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())// Access API 
        }
    }, [emblaApi])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {/* Large Collection Image */}
                <div className={styles.embla__slide}>
                    <a href="https://www.auraexchange.org/mint" target='_blank'>
                        <Image
                            src="https://ipfs.thirdwebcdn.com/ipfs/Qmaw79Y7SFDwj1HPHYAGer5uUCu46oYdk1SVuNb4dyzuKx/AURA%20(300%20%C3%97%20300%20px).png"
                            alt="Aura ProjectS"
                            height={430}
                            width={379}
                        />
                        <div className={styles.labelContainer}>
                            <span className={styles.label}>
                                MINTING NOW
                            </span>
                        </div>
                    </a>

                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://www.auraexchange.org/mint" target='_blank'>
                                <span>
                                    Aure Exchange Membership
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={styles.embla__slide}>
                    <a href="https://kronickatz.auraexchange.org/" target='_blank'>
                        <Image
                            src="/kk.png"
                            alt=""
                            height={430}
                            width={379}
                        />
                    </a>
                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://kronickatz.auraexchange.org/" target='_blank'>
                                <span>
                                    Kronic Katz
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={styles.embla__slide}>
                    <a href="https://nft-unity.auraexchange.org/" target='_blank'>
                        <Image
                            src="/collectionsLogos/NFTUnity.png"
                            alt=""
                            height={430}
                            width={379}
                        />
                    </a>
                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://nft-unity.auraexchange.org/" target='_blank'>
                                <span>
                                    NFT Unity
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.embla__slide}>
                    <a href="https://rarelazyapepes.auraexchange.org/" target='_blank'>
                        <Image
                            src="https://ipfs.thirdwebcdn.com/ipfs/QmcYtSv42ebWqurhkovMMM8Xuw5eMTC6zADt6EuJU6G8pp/RLA%20LOGO%20FINAL-01-01%20(1).png"
                            alt=""
                            height={430}
                            width={379}
                        />
                    </a>
                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://rarelazyapepes.auraexchange.org/" target='_blank'>
                                <span>
                                    R.L.A City NFT
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={styles.embla__slide}>
                    <a href="https://shibu.auraexchange.org/" target='_blank'>
                        <Image
                            src="https://ipfs.thirdwebcdn.com/ipfs/QmSWwS9xzKw61nRsEutMwy9q6ESqY3hEDw6StunUSXLrV2/SHIBU_ANIM_PROMO_1.gif"
                            alt=""
                            height={430}
                            width={379}
                        />
                    </a>
                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://shibu.auraexchange.org/" target='_blank'>
                                <span>
                                    SHIBU: Genesis Collection
                                </span>
                                <div className={styles.labelContainer}>
                                    <span className={styles.label}>
                                        MINTING NOW
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={styles.embla__slide}>
                    <a href="https://zombeze.auraexchange.org/" target='_blank'>
                        <Image
                            src="https://ipfs.thirdwebcdn.com/ipfs/Qmdf7xkwRPMEDbgzzFoEDgoDj8dPSeBGvHEAJ73a3RjTfo/1.png"
                            alt=""
                            height={430}
                            width={379}
                        />

                    </a>
                    <div className={styles.infoContainer}>
                        {/* Collection Name */}
                        <div>
                            <a href="https://zombeze.auraexchange.org/" target='_blank'>
                                <span>
                                    Zombeze of Enlightenment
                                </span>
                                <div className={styles.labelContainer}>
                                    <span className={styles.label}>
                                        MINTING NOW
                                    </span>
                                </div>

                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}