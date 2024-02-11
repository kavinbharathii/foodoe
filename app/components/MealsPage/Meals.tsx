
import React from "react";
import styles from "./Meals.module.css"
import Image from "next/image";
import Biryani from "./assets/biryaniImage.png"
import Fish from "./assets/fishImage.png"
import Chicken from "./assets/chickenImage.png"
import Link from "next/link";

const MealsPage = () => {
    return (
        <section className={styles.fullPage}>
            <div className={styles.topContent}>
                <h1><span className={styles.highlighted}>Tailored meals</span>, just for you</h1>
                <p>
                    Foodoe designs and delivers just the meal that your tongue craves all the while
                    making it the perfect health boost. Sounds like Magic?! Join us and find out!
                </p>
            </div>

            <div className={styles.bottomContent}>

                <Link href="/bmi">
                    <div className={styles.card}>
                        <div className={styles.dropScreen}></div>
                        <Image src={Biryani} className={styles.cardImage} alt="Chicken Biryani" />
                        <p className={styles.cardText}>Tasty</p>
                    </div>
                </Link>

                <Link href="/bmi">
                    <div className={styles.card}>
                        <div className={styles.dropScreen}></div>
                        <Image src={Fish} className={styles.cardImage} alt="Fish Curry" />
                        <p className={styles.cardText}>Flavorful</p>
                    </div>
                </Link>

                <Link href="/bmi">
                    <div className={styles.card}>
                        <div className={styles.dropScreen}></div>
                        <Image src={Chicken} className={styles.cardImage} alt="Chicken Curry" />
                        <p className={styles.cardText}>Healthy</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}


export default MealsPage