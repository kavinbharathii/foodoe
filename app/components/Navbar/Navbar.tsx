
"use client"
import React from "react";
import styles from "./Navbar.module.css"
import { useState } from "react";
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {

    const { isSignedIn, isLoaded, user } = useUser()
    const [isOpen, setIsOpen] = useState(false)
    const largeScreen = screen.width >= 1000

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                Foodoe.
            </div>

            {
                largeScreen ? (
                    <div className={styles.navContentFullScreen}>
                        <p>Home</p>
                        <p>Contact</p>
                        <Link href={"/plans"}><p>Pricing</p></Link>
                        {
                            isSignedIn ? <UserButton afterSignOutUrl="/" userProfileMode="navigation" userProfileUrl="/user" /> : (
                                <>
                                    <p className={styles.signIn}><SignInButton /></p>
                                    <p className={styles.signUp}><SignUpButton /></p>
                                </>
                            )
                        }

                    </div>
                ) : (
                    <div className={styles.navContent}>
                        <span className={`material-symbols-outlined ${styles.hamburger}`} onClick={() => { setIsOpen(!isOpen) }}>
                            menu
                        </span>

                        <div className={`${styles.navLinks} ${isOpen ? '' : styles.displayNone} `}>
                            <p>Home</p>
                            <p>Contact</p>
                            <p>Pricing</p>
                            {
                                isSignedIn ? <UserButton afterSignOutUrl="/" userProfileMode="navigation" userProfileUrl="/user" /> : (
                                    <>
                                        <p className={styles.signIn}><SignInButton /></p>
                                        <p className={styles.signUp}><SignUpButton /></p>
                                    </>
                                )
                            }

                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Navbar
