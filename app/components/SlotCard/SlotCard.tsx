
import React from "react";
import styles from "./SlotCard.module.css"

const Slot = ({time, phaseOfDay} : {time : String, phaseOfDay : String}) => {

    if (phaseOfDay == "morning") {
        return (
            <div className={`${styles.slotCard} ${styles.morning}`}>
                {time}
            </div>
        )
    } else if (phaseOfDay == "afternoon") {
        return (
            <div className={`${styles.slotCard} ${styles.afternoon}`}>
                {time}
            </div>
        )
    } else {
        return (
            <div className={`${styles.slotCard} ${styles.evening}`}>
                {time}
            </div>
        )
    }
}

export default Slot
