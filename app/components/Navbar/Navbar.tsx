
"use client"
import React from "react";
import styles from "./Navbar.module.css"
import { useState } from "react";
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const Navbar = () => {

    const { isSignedIn, isLoaded, user } = useUser()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                Foodoe.
            </div>

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
        </div>
    )
}

export default Navbar
