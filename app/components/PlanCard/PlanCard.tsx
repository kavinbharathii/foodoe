
import React from "react";
import styles from "./PlanCard.module.css"
import Link from "next/link";

const PlanCard = ({planName} : {planName : String}) => {
    return (
        <Link href="/bmi">
            <div className={styles.planCard}>
                {planName}
            </div>
        </Link>
    )
}

export default PlanCard