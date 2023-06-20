import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.contact}>
             <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Contact</h1>
        <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <div className={styles.contactAddress}>
            <p className={styles.contactText}>Studio Address: FitFuel Fitness Studio, 123 Fitness Avenue, Anytown, USA</p>
            <p className={styles.contactText}>Phone Number: +1 (555) 123-4567</p>
            <p className={styles.contactText}>Email: info@fitfuelfitness.com</p>
            </div>
            </div>
            <div className={styles.contactSocial}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Our Socials</h1>
            <div className={styles.contactSocialIcon}>
                <div>
            <p className={styles.contactText}>Facebook</p>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={60} height={60} />
                
            </a>
            </div>

            <div>
            <p className={styles.contactText}>Instagram</p>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="images/instagram.svg" alt="Instagram" width={60} height={60} />
            </a>
            </div>

            <div className={styles.twitter}>
            <p className={styles.contactText}>Twitter</p>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" alt="Twitter" width={45} height={60} style={{marginLeft:'7px'}}/>
            </a>
            </div>
            </div>
            </div>

            <div className={styles.contactForm}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Have some questions?</h1>
            <h2 className={styles.contactTitle}>Send us a Message</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className={styles.contactButton}>Send</button>
            </form>
            </div>
        </div>
        </div>
    )
}
