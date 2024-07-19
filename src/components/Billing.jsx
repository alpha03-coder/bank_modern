import React from 'react';
import styles, {layout} from '../style';
import {apple,bill,google} from '../assets'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className="absolute z-[3] top-0 w-[50%] -left-1/2 h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] bottom-0 w-[50%] -left-1/2 h-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Eaisly control your <br className='sm:block hidden'/> billing and invooicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
        </p>
        <div className='flex felx-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" alt='google-play'/>
          <img src={google} className="w-[128px] h-[42px] object-contain cursor-pointer" alt='google-play'/>
        </div>
      </div>

    </section>
  )
}

export default Billing