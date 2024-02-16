
import React from "react";
import styles from "./PlanCard.module.css"
import Link from "next/link";

const PlanCard = ({planName, isSpecial = false} : {planName : String, isSpecial?: Boolean}) => {
    return (
        <Link href="/bmi">
            <div className={`${styles.planCard} ${isSpecial ? styles.isSpecial : ''}`}>
                {planName}
            </div>
        </Link>
    )
}

export default PlanCard
