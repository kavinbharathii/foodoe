
// route: meeting-slots

import React from "react";
import styles from "./slots.module.css"
import Slot from "../components/SlotCard/SlotCard";
import Doodle from "./assets/doodle.png"
import Image from "next/image";

const Slots = () => {
    return (
        <section className={styles.fullPage}>
            <Image src={Doodle} alt="foodoe doodle" className={styles.doodle} />

            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Choose your own time to meet
                    <br />
                    your <span className={styles.highlighted}>personalized nutrionist</span>.
                </h1>

                <div className={styles.slotRows}>
                    <div className={styles.slotsRow}>
                        <Slot time={"08:00 - 08:30"} phaseOfDay={"morning"} />
                        <Slot time={"08:30 - 09:00"} phaseOfDay={"morning"} />
                    </div>

                    <div className={styles.slotsRow}>
                        <Slot time={"11:00 - 11:30"} phaseOfDay={"afternoon"} />
                        <Slot time={"11:30 - 12:00"} phaseOfDay={"afternoon"} />
                        <Slot time={"12:00 - 12:30"} phaseOfDay={"afternoon"} />
                    </div>

                    <div className={styles.slotsRow}>
                        <Slot time={"02:00 - 02:30"} phaseOfDay={"evening"} />
                        <Slot time={"02:30 - 03:00"} phaseOfDay={"evening"} />
                        <Slot time={"03:00 - 03:30"} phaseOfDay={"evening"} />
                        <Slot time={"03:30 - 04:00"} phaseOfDay={"evening"} />
                    </div>
                </div>

            </div>

            <div className={styles.orange}></div>


        </section>
    )
}

export default Slots
