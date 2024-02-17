
import React from "react";
import styles from "./SlotCard.module.css"


// component for selecting the slot timinig for the online meeting
// changes color deeping on the phase of the day. Shades of orange for morning, afernoon and evening.

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
