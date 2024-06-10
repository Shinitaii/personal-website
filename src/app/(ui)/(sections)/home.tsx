'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NavLink from "../components/nav-link";

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
            <div className="w-1/2 flex md:justify-evenly justify-between items-end lg">
                <NavLink href='' title='About' onPressed={() => navigate('about')}/>
                <div>
                    <h1 className='flex justify-center text-center font-bold md:text-2xl'>{isMobile ? 'Richmond Glenn Viloria' : 'RGV'}</h1>
                </div>
                <NavLink href='' title='Works' onPressed={() => navigate('works')}/>
            </div>
            <hr className="h-px w-1/2 md:my-4 my-2 border-yellow-300"/>
            <div className='flex justify-evenly w-1/3'>
                <NavLink href='https://github.com/Shinitaii' title={<FaGithub size={isMobile ? 65 : 20}/>} animation="hover:translate-y-2 hover:scale-110"/>
                <NavLink href='https://www.linkedin.com/in/richmond-glenn-viloria/' title={<FaLinkedin size={isMobile ? 65 : 20}/>} animation="hover:translate-y-2 hover:scale-110"/>
                <NavLink href='mailto:rgviloria1@gmail.com' title={<FaEnvelope size={isMobile ? 65 : 20}/>} animation="hover:translate-y-2 hover:scale-110"/>
            </div>
        </div>
    );
}

export default HomeSection;