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
    }, 6900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className='min-h-[45vh] lg:min-h-[70vh] flex lg:items-center' id='home'>
      <div className="container mx-auto">
        <div className='lg:flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-14 justify-center'>

          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='flex-1 items-center justify-center transform-none'>
            {/* <img src={Image} alt="" /> */}
            <div className='lg:mt-0 mt-10'>
              <div className="min-h-[100px] w-auto h-200 z-0 rounded-lg bg-dracula_background p-5 box-border" id='centerthis'>
                <div className=" flex bg-transparent mb-3">
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_red hover:bg-red-700 mr-3"></div>
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_yellow hover:bg-red-700 mr-3"></div>
                  <div className="w-5 h-5 z-30 rounded-full bg-dracula_green hover:bg-green-700"></div>
                </div>
                <div>
                  <div className='font-semibold lg:text-2xl text-lg'>
                    <p className=' text-white'>[vskvj3@github] <TypeAnimation sequence={['', 2000, 'whoami', 2000]} wrapper='span' speed={45} className=' text-dracula_green' cursor={false} /> </p>
                    <TypeAnimation sequence={['', 3000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nesciunt laborum sapiente excepturi voluptas repellendus veritatis dolores dicta. Optio!', 2000]} speed={80} wrapper='p' cursor={false} />
                    <br />
                    {/* socials */}
                    <motion.div variants={fadeIn('right', 5.9)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} transition={{delay: 5000}} className='flex text-[20px] gap-x-6 max-w-max mx-auto sm:ml-0 lg:mx-0'>

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
                    <br />
                    {isVisible && (<p className=' hidden-prompt'>[vskvj3@github] <TypeAnimation sequence={['', 1000, 'Nice to see you here!', 2000]} wrapper='span' speed={45} className=' text-dracula_green' /> </p>)}

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
