'use client'

import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import styles from './header.module.scss'
import Image from "next/image";
import User from "@/image/icon/User.png"
import logo from "@/images/logo.png"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <div className={styles.flex1}>
                        <div className={styles.logo}>
                        <Link href={ROUTER.HOME}  className={styles.text}><Image src={logo} alt="sdd"/></Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href={ROUTER.ABOUT} className={styles.text}>ABOUT US</Link>
                        <Link href={ROUTER.CATALOG} className={styles.text}>CATALOG</Link>
                        <Link href={ROUTER.SALE} className={styles.text}>SALE</Link>
                        
                    </div>
                    </div>
                    <Link href={ROUTER.HOME}><button className={styles.btn}>
                            <p>+000000000</p>
                        </button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;