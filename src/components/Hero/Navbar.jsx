import React, { useState } from 'react';
import logo from '../../assets/image/Hero/dollarlogo.svg';
import EyeImage from '../../assets/image/Hero/eye.svg';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { ref } = useInView();
  const animationVariants = {
    hidden: { x: '-100%', opacity: 0 },
    animate: { x: '0%', opacity: 1, transition: { duration: 0.5 } },
  };
  const toggleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <div className='flex justify-between px-4  md:px-10'>
      <div className='inline-flex items-center'>
        <img
          className='w-[30px] h-[44px] hidden md:block'
          src={logo}
          alt='Eye'
        />
        {!open && (
          <HiMenuAlt1
            className='text-white block md:hidden cursor-pointer'
            size={40}
            onClick={toggleMobileNav}
          />
        )}
      </div>
      <div className=''>
        <nav className=' hidden md:inline-flex items-center text-white text-[12px] gap-[20px] font-[800] tracking-[0.5px] leading-[18px]'>
          <Link to={'/'}>SIGN IN</Link>
          <Link to={'/'}>LEGAL</Link>
          <Link to={'/'}>LICENCES</Link>
          <Link to={'/'}>SECURITY</Link>
          <Link to={'/'}>CAREERS</Link>
          <Link to={'/'}>PRESS</Link>
          <Link to={'/'}>SUPPORT</Link>
          <Link to={'/'}>STATUS</Link>
          <Link to={'/'}>CODEBLOG</Link>
        </nav>
        <motion.nav
          ref={ref}
          initial="hidden"
          animate={open ? 'animate' : 'hidden'}
          variants={animationVariants}
          className='px-8 md:hidden flex flex-col fixed top-0 left-0 z-[10000] w-full h-full bg-black p-3 text-white text-[12px] gap-[20px] font-[800] tracking-[0.5px] leading-[18px]'>
          <RiCloseLine
            className='text-white block md:hidden cursor-pointer self-end'
            size={40}
            onClick={toggleMobileNav}
          />
          <Link to={'/'}>SIGN IN</Link>
          <Link to={'/'}>LEGAL</Link>
          <Link to={'/'}>LICENCES</Link>
          <Link to={'/'}>SECURITY</Link>
          <Link to={'/'}>CAREERS</Link>
          <Link to={'/'}>PRESS</Link>
          <Link to={'/'}>SUPPORT</Link>
          <Link to={'/'}>STATUS</Link>
          <Link to={'/'}>CODEBLOG</Link>
        </motion.nav>
      </div>
      <div className='inline-flex items-center'>
        <img className='w-[63px] h-[36px]' src={EyeImage} alt='Eye' />
      </div>
    </div>
  );
};

export default Navbar;
