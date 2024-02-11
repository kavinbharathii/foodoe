import { SignUp } from "@clerk/nextjs";
import styles from "./page.module.css"

export default function Page() {

    return (
        <section className={styles.fullPage}>
            <SignUp />
        </section>
    )
}
