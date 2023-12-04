
import React from "react";
import styles from "./Footer.module.css"

const FooterPage = () => {
    return (
        <section className={styles.footerPage}>
            <div className={styles.topContent}>
                <p>Foodoe is a cloud kitchen based company that aims to</p>
                <p>create curated healthy meals without compromising that</p>
                <p>tasty meals we all yearn and crave. Based in</p>
                <p><span className={styles.chennai}>Namma Chennai,</span> we promise to bring</p>
                <p>pure tamil love to your next diet plan</p>
            </div>

            <div className={styles.bottomContent}>
                <h1 className={styles.logo}>Foodoe.</h1>
                <p className={styles.creator}>Made by Foodoe.</p>
            </div>
        </section>
    )
}

export default FooterPage