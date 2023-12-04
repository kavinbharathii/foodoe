
import React from "react";
import styles from "./Navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                Foodoe.
            </div>

            <div className={styles.navLinks}>
                <p>Home</p>
                <p>Contact</p>
                <p>Pricing</p>
            </div>
        </div>
    )
}

export default Navbar