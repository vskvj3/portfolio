import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 '>

          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br /> Work
              </h2>
              <p className='max-w-sm mb-16 '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, maxime error eius fuga pariatur molestiae deserunt accusantium perspiciatis facere culpa!

              </p>
              <button className='btn btn-sm'>View all Projects</button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay  */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Academic Project
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-600 z-50'>
                <span className='text-3xl text-white'>Alertme</span>
              </div>
            </div>
          </motion.div>
          </div>

          <div className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay  */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Academic Project
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-600 z-50'>
                  <span className='text-3xl text-white'>Hostel Manager</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay  */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Hobby Project
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-600 z-50'>
                  <span className='text-3xl text-white'>Ambience</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
