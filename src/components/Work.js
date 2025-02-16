import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Chips from './chips';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  const getGithub = () => {
    window.location.href = 'https://github.com/vskvj3';
  };
  const getRepo1 = (repo) => {
    window.location.href = 'https://github.com/vskvj3/hostel-management-system';
    
  };
  const getRepo2 = (repo) => {
    window.location.href = 'https://github.com/vskvj3/alertMe_v2';
    
  };
  const getRepo3 = (repo) => {
    window.location.href = 'https://github.com/vskvj3/audiobook_player';
    
  };
  
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 '>

          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 lg:justify-between md:justify-between'>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My Latest <br /> Work
                </h2>
                <p className='max-w-sm mb-16 '>
                  Here are some of my favourite projects
                </p>
                <button className='btn btn-sm' onClick={getGithub}>View all Projects</button>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay  */}
                <div className='group-hover:bg-black/90 bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                {/* before hover */}
                <div>
                  <div className='absolute top-7 lg:top-10 group-hover:-top-full transition-all duration-300 left-6 lg:left-12  z-50'>
                    <span className='font-semibold text-xl lg:text-3xl text-white'>AlertMe</span>
                    <p className='text-sm lg:text-xl text-white mt-1'>Android application developed to send emergency alert to nearby users, emergency contacts and authorities.</p>
                  </div>
                  <div className='flex-row absolute top-32 lg:top-44 group-hover:-top-full transition-all duration-300 left-2  lg:left-12  z-50'>
                    < Chips content={'Node.js'} />
                    < Chips content={'Flutter'} />
                    < Chips content={'MongoDB'} />
                    < Chips content={'Firebase'} />
                    < Chips content={'JWT'} />
                    < Chips content={'FCM'} />
                  </div>
                  {/* 
                  <div className='absolute top-56 group-hover:-top-full transition-all duration-300 left-12  z-50'>
                    <button className='btn px-10'>View Project</button>
                  </div>
*/}

                </div>
                {/* pretitle */}
                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-52 group-hover:bottom-28 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Academic Project
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-60 group-hover:bottom-36 transition-all duration-600 z-50'>
                  <span className='text-2xl lg:text-3xl text-white'>Alertme</span>
                </div>

                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-24 group-hover:bottom-10 transition-all duration-600 z-50'>
                  <button className='btn btn-sm sm:text-sm' onClick={getRepo2}>View Project</button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0  lg:justify-between md:justify-between'>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              {/* image  */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay  */}
                <div className='group-hover:bg-black/90 w-full h-full bg-black/70 absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
                {/* before hover */}
                <div>
                  <div className='absolute top-7 lg:top-10 group-hover:-top-full transition-all duration-300 left-6 lg:left-12  z-50'>
                    <span className=' font-semibold text-xl lg:text-3xl text-white'>Hostel Manager</span>
                    <p className='text-sm lg:text-xl text-white mt-1'>A software developed to monitor daily attendance, track expanses and calculate mess bill for a hostel.</p>
                  </div>
                  <div className='flex-row absolute top-32 lg:top-44 group-hover:-top-full transition-all duration-300 left-2 lg:left-12  z-50'>
                    < Chips content={'Java'} />
                    < Chips content={'MySQL'} />
                    < Chips content={'JDBC'} />
                    < Chips content={'Swing'} />
                    < Chips content={'NetBeans IDE'} />
                  </div>

                </div>
                {/* after hover  */}
                <div>
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-52 group-hover:bottom-28 transition-all duration-500 z-50'>
                    <span className='text-gradient'>
                      Academic Project
                    </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-60 group-hover:bottom-36 transition-all duration-600 z-50'>
                    <span className='text-2xl lg:text-3xl text-white'>Hostel Manager</span>
                  </div>

                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-24 group-hover:bottom-10 transition-all duration-600 z-50'>
                    <button className='btn btn-sm sm:text-sm' onClick={getRepo1}>View Project</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=''>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/* overlay  */}
                <div className='group-hover:bg-black/90 bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
                {/* before hover */}
                <div>
                  <div className='absolute top-7 lg:top-10 group-hover:-top-full transition-all duration-300 left-6 lg:left-12  z-50'>
                    <span className=' font-semibold text-xl sm:text-3xl text-white'>Ambience</span>
                    <p className='text-sm lg:text-xl text-white mt-1'>An android application developed to listen audiobooks from streaming services with advanced controlls and background sound functionality.</p>
                  </div>
                  <div className='flex-row absolute top-32 lg:top-44 group-hover:-top-full transition-all duration-300 left-2 lg:left-12  z-50'>
                    < Chips content={'Flutter'} />
                    < Chips content={'Android'} />
                  </div>


                </div>
                {/* pretitle */}
                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-52 group-hover:bottom-28 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Hobby Project
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-60 group-hover:bottom-36 transition-all duration-600 z-50'>
                  <span className='text-2xl lg:text-3xl text-white'>Ambience</span>
                </div>

                <div className='absolute -bottom-full left-6 lg:left-12 group-hover:lg:bottom-24 group-hover:bottom-10 transition-all duration-600 z-50'>
                  <button className='btn btn-sm sm:text-sm' onClick={getRepo3}>View Project</button>
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
