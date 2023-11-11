
import React from "react";
import styles from "./PlanCard.module.css"

const PlanCard = ({planName} : {planName : String}) => {
    return (
        <div className={styles.planCard}>
            {planName}
        </div>
    )
}

export default PlanCard