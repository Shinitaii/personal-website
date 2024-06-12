import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaChevronLeft, FaJava, FaReact, FaUnity, FaNodeJs} from 'react-icons/fa';
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import { BiLogoTypescript, BiLogoFlutter, BiLogoSpringBoot  } from "react-icons/bi";
import { SiCsharp, SiDart, SiExpress, SiGodotengine, SiMysql, SiMongodb, SiPostman, SiAndroidstudio,  } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import NavLink from "../components/nav-link";
import Image from 'next/image';
import AboutIntro from "../components/about/intro";
import AboutDetails from "../components/about/about";
import AboutTechnologies from "../components/about/technologies";

interface AboutSectionProps {
    navigate: Dispatch<SetStateAction<string>>;
}
  
const AboutSection : React.FC<AboutSectionProps> = ({navigate}) => {
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

  const technologies : Array<any> = [
    // languages
    { icon: FaJava, name: 'Java' },
    { icon: IoLogoJavascript, name: 'JavaScript' },
    { icon: SiCsharp, name: 'C#' },
    { icon: BiLogoTypescript, name: 'TypeScript' },
    { icon: SiDart, name: 'Dart' },
    // frameworks
    { icon: RiNextjsFill, name: 'Next.js' },
    { icon: FaReact, name: 'React' },
    { icon: BiLogoFlutter, name: 'Flutter' },
    { icon: BiLogoSpringBoot, name: 'Spring Boot' },
    { icon: SiExpress, name: 'Express' },
    { icon: FaNodeJs, name: 'Node.js' },
    // game engines
    { icon: FaUnity, name: 'Unity' },
    { icon: SiGodotengine, name: 'Godot' },
    // databases
    { icon: IoLogoFirebase, name: 'Firebase' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiMongodb, name: 'MongoDB' },
    // tools
    { icon: SiPostman, name: 'Postman' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: SiAndroidstudio, name: 'Android Studio' },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      <div className='absolute w-fit p-8'>
      <NavLink title={<FaChevronLeft size={isMobile ? 40 : 20}/>} href={""} onPressed={() => navigate('home')} animation="hover:-translate-x-2 focus:-translate-x-2 active:-translate-x-2"></NavLink>
      </div>
      <div className='w-full h-screen flex md:flex-row flex-col justify-evenly items-center'>
      {isMobile ? (
        <>
          <div className='flex flex-col justify-evenly items-center'>
            <AboutIntro isMobile={isMobile}/>
            <hr className="h-px w-3/4 md:my-4 my-2 border-yellow-300"/>
            <AboutTechnologies technologies={technologies} size={35}/>
          </div>
          <AboutDetails isMobile={isMobile}/>
        </>
        ) : (
          <div className='flex flex-col md:flex-row justify-evenly items-center'>
            <AboutIntro isMobile={isMobile}/>
            <hr className="h-px w-3/4 md:my-4 my-2 border-yellow-300"/>
            <AboutDetails isMobile={isMobile}/>
            <hr className="h-px w-3/4 md:my-4 my-2 border-yellow-300"/>
            <AboutTechnologies technologies={technologies} size={30}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutSection;
