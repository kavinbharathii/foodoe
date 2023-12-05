
import React from "react";
import styles from "./Footer.module.css"
import Link from "next/link";

const FooterPage = () => {

    const instgramLink = "https://www.instagram.com/foodoe.in/"
    const youtubeLink = "https://www.youtube.com/@Foodoe"
    const linkedinLink = "https://www.linkedin.com/in/foodoe-in-8766472a3/"
    return (
        <section className={styles.footerPage}>
            <div className={styles.topContent}>
                {/* <p>Foodoe is a cloud kitchen based company that aims to</p>
                <p>create curated healthy meals without compromising that</p>
                <p>tasty meals we all yearn and crave. Based in</p>
                <p><span className={styles.chennai}>Namma Chennai,</span> we promise to bring</p>
                <p>pure tamil love to your next diet plan</p> */}

                <Link href={instgramLink} target="_blank">instagram/foodoe.in</Link>
                <br />
                <Link href={youtubeLink} target="_blank">youtube/foodoe.in</Link>
                <br />
                <Link href={linkedinLink} target="_blank">linkedin/foodoe.in</Link>
            </div>

            <div className={styles.bottomContent}>
                <h1 className={styles.logo}>Foodoe.</h1>
                <p className={styles.creator}>Made by Foodoe.</p>
            </div>
        </section>
    )
}

export default FooterPage
