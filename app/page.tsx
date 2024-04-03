'use client'
import Image from "next/image";
import style from "./page.module.scss"
import Link from "next/link";
import tic from "@/images/home/tictac.png"
import tictac from "@/images/home/tic.png"
import btn1 from "@/images/home/btn1.png"
import btn2 from "@/images/home/btn2.png"


export default function Home() {


  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.main_row}>
          <div className={style.welcome}>
            <h1 className={style.h1__welcom}>Welcome to our collection of premium watches</h1>
            <p className={style.p__welcom}>Our watches are not just timepieces, but <br /> also an expression of your personality and <br /> lifestyle. From classic designs to modern <br /> ones, we have a watch to suit every taste and occasion.</p>
          </div>
          <div className={style.info}>
            <div className={style.swiiper}>
            <Image src={tic} alt="Rocket"  />
            <div className={style.swipper__bootom}>
              <div className={style.btn__swiper}>
              <Image src={btn1} alt="Rocket"  />
              <Image src={btn2} alt="Rocket"  />
              </div>
            </div>
            </div>
            <Image src={tictac} alt="Rocket"  />
          </div>
        
        </div>
      </div>

     

    </main>

  );


}

