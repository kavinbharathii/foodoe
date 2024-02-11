
import React from "react";
import Image from "next/image";
import Meet1 from "./assets/meet1.png"
import Meet2 from "./assets/meet2.png"
import Meet3 from "./assets/meet3.png"
import styles from "./bookmeet.module.css"
import Link from "next/link";

const BookMeet = () => {
    return (
        <section className={styles.fullPage}>
            <Image src={Meet1} className={`${styles.assetImage} ${styles.image1}`} alt="online meeting of doctors and patients" />
            <Image src={Meet2} className={`${styles.assetImage} ${styles.image2}`} alt="online meeting of doctors and patients" />
            <Image src={Meet3} className={`${styles.assetImage} ${styles.image3}`} alt="online meeting of doctors and patients" />

            <div className={styles.dropScreen}></div>

            <div className={styles.mainContent}>
                Connect with the best nutrionists to devise a health plan made <span className={styles.highlighted}>just for you</span>
            </div>

            <Link href={'/meeting-slots'} className={styles.actionButton}>
                Book Now
            </Link>
        </section>
    )
}

export default BookMeet