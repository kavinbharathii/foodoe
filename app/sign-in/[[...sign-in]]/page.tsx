import { SignIn } from "@clerk/nextjs";
import styles from "./page.module.css"

const Page = async ({ searchParams } : { searchParams : any }) => {
    const { redirectUrl } = searchParams

    return (
        <section className={styles.fullPage}>
            <SignIn redirectUrl={redirectUrl || '/'} />
        </section>
    )
}

export default Page
