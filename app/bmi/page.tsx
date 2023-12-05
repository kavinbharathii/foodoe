
"use client"
import React from "react"
import styles from "./planpage.module.css"
import { useState } from "react"
import Link from "next/link"
import Doodle from "./assets/doodle.png"
import Image from "next/image"

const BMIPage = () => {

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const handleName = (e: any) => {
        setName(e.target.value)
    }

    const handleHeight = (e: any) => {
        setHeight(e.target.value)
    }

    const handleWeight = (e: any) => {
        setWeight(e.target.value)
    }

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

        else {
            const heightInMts = parseInt(height) / 100;
            const numerator = parseInt(weight);
            const denominator = heightInMts ** 2;
            const result = numerator / denominator;
            const bmi = parseFloat(result.toFixed(2))

            console.log(bmi)

            if (bmi < 18.5) {
                console.log("Underweight")
            } else {
                if (bmi >= 30) {
                    console.log("Obese")
                } else if (bmi >= 25) {
                    console.log("Overweight")
                } else {
                    console.log("Normal weight")
                }
            }
        }
    }

    return (
        <section className={styles.fullPage}>
            <Image src={Doodle} alt="foodoe doodle" className={styles.doodle}/>
            <div className={styles.orangeSection}>
                Your Body Mass Index (BMI) helps us understand your health better.
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
