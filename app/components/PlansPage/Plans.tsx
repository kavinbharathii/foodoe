
import React from "react";
import styles from "./Plans.module.css"
import PlanCard from "../PlanCard/PlanCard";

const PlansPage = () => {
    return (
        <section className={styles.fullPage}>
            <div className={styles.planContent}>
                <p>Choose a diet plan for your</p>
                <span className={styles.highlighted}>healthy adventure</span>
            </div>

            <div className={styles.planCards}>
                <div className={styles.cardRow}>
                    <PlanCard planName="High Protein" />
                    <PlanCard planName="Low Calorie" />
                    <PlanCard planName="Low GI" />
                </div>

                {/* 
                <div className={styles.cardRow}>
                    <PlanCard planName="Gluten free" />
                    <PlanCard planName="Keto diet" />
                </div> */}

            </div>
        </section>
    )
}

export default PlansPage
