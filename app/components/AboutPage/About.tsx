
import React from "react";
import styles from "./About.module.css"
import Image from "next/image";
import Doodle from "./assets/doodle.png"

const About = () => {
    return (
        <section className={styles.fullPage}>
            <Image src={Doodle} alt="foodoe doodle" className={styles.doodle} />
            <div className={styles.content}>
                <div className={styles.heading}>But, why <span className={styles.highlighted}>Foodoe?!</span></div>
                <div className={styles.contentPoints}>
                    <div>
                        <span className={styles.boldTag}>FOOD:</span> We provide breakfast, lunch, snacks and dinner. We provide healthier alternatives of your favorite dishes and do not repeat a dish for 4 weeks.
                    </div>
                    <div>
                        <span className={styles.boldTag}>NUTRITION:</span> We assign you a personal nutritionist who assesses your lifestyle, health requirements, eating habits and nutritional needs to help you achieve your nutrition goal.
                    </div>
                    <div>
                        <span className={styles.boldTag}>MEAL DELIVERY:</span> We deliver meals for the low-carb High Protein, Vegan and Balanced Diet.
                    </div>
                    <div>
                        <span className={styles.boldTag}>FLEXIBILITY:</span> We provide flexibility in terms of pausing  your meals, food and delivery preferences subject to our guidelines.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
