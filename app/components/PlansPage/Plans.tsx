
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
                <div className={styles.planCardsRow}>
                    <PlanCard planName="High Protein" />
                    <PlanCard planName="Low Calorie" />
                    <PlanCard planName="Pcos" />
                </div>
                <div className={styles.planCardsRow}>
                    <PlanCard planName="Low GI" />
                    <PlanCard planName="Let the nutritionist decide" />
                    <PlanCard planName="Take a free session" isSpecial={true}/>
                </div>
            </div>
        </section>
    )
}

export default PlansPage
