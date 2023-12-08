
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

            <div className={styles.navLinks}>
                {
                    isOpen ? (
                        <>
                            <p>Home</p>
                            <p>Contact</p>
                            <p>Pricing</p>
                            {
                                isSignedIn ? <UserButton afterSignOutUrl="/" /> : (
                                    <>
                                        <p className={styles.signIn}><SignInButton /></p>
                                        <p className={styles.signUp}><SignUpButton /></p>
                                    </>
                                )
                            }
                        </>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
