
'use client'
import React from "react";
import styles from "./Home.module.css"
import HeroImage from "./assets/homeFoodImage.png"
import Doodle from "./assets/doodle.png"
import Image from "next/image";

const HomePage = () => {
    return (
        <section className={styles.fullPage}>
            <div className={styles.dropScreen}></div>
            <Image src={Doodle} alt="Vegetable doodle" className={styles.doodle}></Image>
            <div className={styles.heroContent}>
                <p>Same <span className={styles.highlighted}>Taste</span>.</p>
                <p>Same <span className={styles.highlighted}>Flavor</span>.</p>
                <p>But this time,</p>
                <p>It's also <span className={styles.highlighted}>Healthy</span>.</p>
            </div>

            <Image src={HeroImage} alt="Traditional South Indian Food" className={styles.heroImage}/>

        </section>
    )
}

export default HomePage
