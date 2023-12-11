
import React from "react";
import styles from "./user.module.css"
import { UserProfile } from "@clerk/nextjs"
import Image from "next/image";
import Doodle from "./assets/doodle.png"

const userPage = () => {
    return (
        <section className={styles.fullPage}>
            <Image className={styles.doodle} src={Doodle} alt="Foodoe doodle" />
            <UserProfile />
        </section>
    )
}

export default userPage
