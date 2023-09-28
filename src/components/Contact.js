import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useState } from 'react';

const Contact = () => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const sendMail = () => {
    window.location.href = `mailto:{emailValue}?subject={nameValue}&body={messageValue}`;
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Contact Me
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Get In <br /> touch</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
                  type="text" 
                  placeholder='Your email' 
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
            />
            <input 
                  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                  type="text" 
                  placeholder='Your name'
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)} 
            />
            <textarea 
                  className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                  placeholder='Your message'
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  ></textarea>
            <button className='btn btn-lg' onClick={sendMail}> Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
