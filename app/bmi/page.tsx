
"use client"
import React from "react"
import styles from "./planpage.module.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import Doodle from "./assets/doodle.png"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import axios from "axios"

const BMIPage = () => {

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState(0)
    const [result, setResult] = useState('')
    const { isSignedIn, isLoaded, user } = useUser()

    // if the current user of the page is numm, 
    // there is a serious problem to be fixed.
    if (user == null) {
        // console.log("What da fuq?!")
    } else {
        const username = user.username
        console.log(username)
    }

    const handleName = (e: any) => {
        setName(e.target.value)
    }

    const handleHeight = (e: any) => {
        setHeight(e.target.value)
    }

    const handleWeight = (e: any) => {
        setWeight(e.target.value)
    }

    // if all the required fields are filled, 
    // we calculate the bmi.
    const calculateBMI = () => {
        if (!name) {
            console.log("No name")
        }

        else if (!weight) {
            console.log("No weight")
        }

        else if (!height) {
            console.log("No height")
        }

        // maths to find bmi
        else {
            const heightInMts = parseInt(height) / 100;
            const numerator = parseInt(weight);
            const denominator = heightInMts ** 2;
            const result = numerator / denominator;
            setBmi(parseFloat(result.toFixed(2)))
        }
    }

    // categorizing bmi based on the different value categories
    const categorizeBMI = () => {
        if (bmi < 18.5) {
            console.log("Underweight")
            setResult("Underweight")
        } else {
            if (bmi >= 30) {
                console.log("Obese")
                setResult("Obese")
            } else if (bmi >= 25) {
                console.log("Overweight")
                setResult("Overweight")
            } else {
                console.log("Normal weight")
                setResult("Normal weight")
            }
        }
    }

    // updating the calculated bmi value to the db
    const updateBMIinDb = async () => {
        if (user == null) {
            console.log("Update in DB: Null User")
        } else {
            console.log(`Calculated BMI: ${bmi}`)

            const userData = {
                email: user.primaryEmailAddress?.toString(),
                username: user.username || 'default name',
                bmi: bmi
            }

            console.log(userData)
            try {
                const response = await axios.post('https://foodoe.vercel.app/api/user/new', userData)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }

    // check for changes in bmi, and call the respective functions
    useEffect(() => {
        categorizeBMI()
        updateBMIinDb()
    }, [bmi])

    return (
        <section className={styles.fullPage}>
            <Image src={Doodle} alt="foodoe doodle" className={styles.doodle} />
            <div className={styles.orangeSection}>
                Your Body Mass Index (BMI) helps us understand your health better.

                <div className={styles.bmiDisplay}>
                    {
                        (bmi != 0) && `Your BMI: ${bmi}/${result}`
                    }
                </div>
            </div>

            <div className={styles.bmiSection}>
                <div className={styles.inputBox}>
                    <p>Name</p>
                    <input type="text" value={name} required={true} onChange={handleName} />
                </div>

                <div className={styles.inputBox}>
                    <p>Height (in cms)</p>
                    <input type="number" value={height} required={true} onChange={handleHeight} />
                </div>

                <div className={styles.inputBox}>
                    <p>Weight (in kgs)</p>
                    <input type="number" value={weight} required={true} onChange={handleWeight} />
                </div>


                <div className={styles.buttons}>
                    <button className={styles.calculateButton} onClick={calculateBMI}>Calculate BMI</button>
                    <Link href="/book-meeting">
                        <button className={styles.proceedButton}>Continue</button>
                    </Link>
                </div>

                <div className={styles.footnote}>
                    <p>*Your privacy matters. We do not share your personal information with third parties.</p>
                    <p>Any data collected is used solely for enhancing your experience on our platform.</p>
                </div>
            </div>

        </section>
    )
}

export default BMIPage
