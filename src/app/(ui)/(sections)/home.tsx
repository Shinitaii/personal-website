'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NavLink from "../components/nav-link";
import { motion } from "framer-motion";

interface HomeSectionProps {
  navigate: Dispatch<SetStateAction<string>>;
}

const HomeSection  : React.FC<HomeSectionProps> = ({navigate}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };
  
    useEffect(() => {
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="md:w-1/2 w-3/5 flex md:justify-evenly justify-between items-end lg">
                <NavLink href='' title='About' onPressed={() => navigate('about')} y={20} delay={1.25}/>
                <motion.div
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{ease: 'easeInOut', duration: 0.5, delay: 1}}
                >
                    <h1 className='flex justify-center text-center font-bold md:text-2xl text-xl'>{isMobile ? 'Richmond Glenn Viloria' : 'RGV'}</h1>
                </motion.div>
                <NavLink href='' title='Works' onPressed={() => navigate('works')} y={20} delay={1.5}/>
            </div>
            <hr className="h-px md:w-1/2 w-3/4  md:my-4 my-2 border-yellow-300"/>
            <div className='flex justify-evenly md:w-3/5 w-4/5'>
              <NavLink href='https://github.com/Shinitaii' title={<FaGithub size={isMobile ? 65 : 30}/>} animation="hover:translate-y-2 hover:scale-110 focus:translate-y-2 active:translate-y-2 focus:scale-110 active:scale-110" y={-20} delay={1.75}/>
              <NavLink href='https://www.linkedin.com/in/richmond-glenn-viloria/' title={<FaLinkedin size={isMobile ? 65 : 30}/>} animation="hover:translate-y-2 hover:scale-110 focus:translate-y-2 active:translate-y-2 focus:scale-110 active:scale-110" y={-20} delay={2}/>
              <NavLink href='mailto:rgviloria1@gmail.com' title={<FaEnvelope size={isMobile ? 65 : 30}/>} animation="hover:translate-y-2 hover:scale-110 focus:translate-y-2 active:translate-y-2 focus:scale-110 active:scale-110" y={-20} delay={2.25}/>
            </div>
        </div>
    );
}

export default HomeSection;