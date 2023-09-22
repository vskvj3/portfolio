import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const getResume = () => {
    window.location.href = 'https://drive.google.com/file/d/1__v8HIBDno8SqG4fMW6qzLrbvWabGMxI/view?usp=sharing';
  };

  return <header className=' py-8 '>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="">
          <img src={Logo} alt="" width={100} height={100}/>
        </a>

        <button className='btn btn-sm' href='google.com' onClick={getResume}>
          Resume
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
