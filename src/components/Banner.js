import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaLinkedin, FaTree } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useState, useEffect } from 'react';



const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 6500); 

  return () => {
    clearTimeout(timer); 
  };
}, []);
  
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='lg:flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-14'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>VISAKH <span>VIJAY</span></motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className=' text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Engineer',
                2000,
                'Student',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />

            </motion.div>
            {/* <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam exercitationem blanditiis distinctio odio, impedit assumenda quam quas doloremque nulla quibusdam.
            </motion.p> */}
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'> Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTree />
              </a>
            </motion.div>
          </div >
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='flex-1 lg:max-w-[500px] items-center justify-center transform-none'>
            {/* <img src={Image} alt="" /> */}
            <div className=' mt-10'>
              <div className="min-h-[100px] w-auto h-200 z-0 rounded-lg bg-dracula_background p-5 box-border" id='centerthis'>
                <div className=" flex bg-transparent mb-3">
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_red mr-3"></div>
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_yellow mr-3"></div>
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_green"></div>
                </div>
                <div>
                  <div className='font-semibold'>
                    <p className=' text-white'>[vskvj3@github] <TypeAnimation sequence={['', 2000, 'whoami', 2000]} wrapper='span' speed={45} className=' text-dracula_green' cursor={false} /> </p>
                    <TypeAnimation sequence={['', 3000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nesciunt laborum sapiente excepturi voluptas repellendus veritatis dolores dicta. Optio!', 2000]} speed={80} wrapper='p' cursor={false} />
                  {isVisible &&  (<p className=' hidden-prompt'>[vskvj3@github] <TypeAnimation sequence={['', 2000, 'Nice to see you here!', 2000]} wrapper='span' speed={45} className=' text-dracula_green' /> </p>)}

                  </div>
                </div>
                {/* Content goes here */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
