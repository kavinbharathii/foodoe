
import React from "react";
import styles from "./planspage.module.css"
import PlanCard from "../components/PlanCard/PlanCard";
import Navbar from "../components/Navbar/Navbar";

const PlansPage = () => {
    return (
        <>
            <Navbar />
            <section className={styles.fullPage}>
                <div className={styles.planContent}>
                    <p>Choose a diet plan for your</p>
                    <span className={styles.highlighted}>healthy adventure</span>
                </div>

                <div className={styles.planCards}>
                    <PlanCard planName="High Protein" />
                    <PlanCard planName="Low Calorie" />
                    <PlanCard planName="Pcos" />
                    <PlanCard planName="Low GI" />
                    <PlanCard planName="Let the nutrionist decide" />
                </div>
            </section>
        </>
    )
}

export default PlansPage
