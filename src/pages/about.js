import React from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>About Us</h1>
                    
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <div className={styles.aboutItem}>
                        <h2 className={styles.aboutTitle}>About FitFuel Gym</h2>
                    <p className={styles.aboutParagraph}>FitFuel Gym is a premier fitness facility dedicated to helping individuals achieve their health and wellness goals. We pride ourselves on being a fully equipped gym that is open 24 hours a day, providing our members with the flexibility to work out whenever it suits their schedule. With our emphasis on offering a wide range of classes led by certified instructors, we strive to create a supportive and motivating environment for all fitness enthusiasts.</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <h2 className={styles.aboutTitle}>Our Facility</h2>
                    <p className={styles.aboutParagraph}>At FitFuel Gym, we understand that a well-equipped gym is essential for an effective workout. That's why we have invested in state-of-the-art fitness equipment, including cardio machines, strength training equipment, free weights, and more. Our spacious and clean facility provides ample space for members to exercise comfortably and reach their fitness goals.</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <h2 className={styles.aboutTitle}>Our Instructors</h2>
                        <p className={styles.aboutParagraph}>We take pride in our team of certified instructors who bring their expertise and passion to each class. Our instructors are highly skilled and experienced, ensuring that you receive proper guidance and instruction throughout your fitness journey. They are dedicated to helping you maximize your potential, achieve results, and make each workout session enjoyable and rewarding.</p> 
                   </div>
                    </div>
                    </div>
                    </div>
    );
    }