import React from 'react'
import { feedback } from '../consonants'
import styles from '../style'
import Feedback from './FeedBack'

const Testimonial = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='clients'>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>


      <div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 sm:mb-16 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]'>
        {feedback.map((card)=>(
            <Feedback key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonial