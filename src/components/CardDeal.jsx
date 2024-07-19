import React from 'react'
import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'></br> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} className='w-[100%] h-[100%]' alt='card' />
      </div>
    </section>
  )
}

export default CardDeal
