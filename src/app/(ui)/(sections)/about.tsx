import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaChevronLeft, FaJava, FaReact, FaUnity, FaNodeJs} from 'react-icons/fa';
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import { BiLogoTypescript, BiLogoFlutter, BiLogoSpringBoot  } from "react-icons/bi";
import { SiCsharp, SiDart, SiExpress, SiGodotengine, SiMysql, SiMongodb, SiPostman, SiAndroidstudio,  } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import NavLink from "../components/nav-link";
import Image from 'next/image';

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
      <div className='w-full h-screen flex flex-col justify-evenly items-center'>
        <div className='w-fit flex flex-col justify-center items-center'>
          <Image src='/richmond-photo.jpg' height={isMobile ? 200 : 150} width={isMobile ? 200 : 150} alt='richmond' className="m-2 rounded-full"/>
          <p className='font-bold'>Richmond Glenn Viloria</p>
          <p>An aspiring software engineer</p>
        </div>
        <hr className="h-px w-3/4 my-2"/>
        <div className='mx-8 flex justify-center items-center text-pretty flex-col'>
          <p className='sm:text-base text-sm'>
            Since 2018, I have started <span className='font-bold'>programming as a passion</span>, 
            and over the course of years have developed skill required to become a <span className='font-bold'>software developer</span>.
          </p>
          <p className='sm:text-base text-sm'>
            Since 2022, I am currently studying at the <span className='font-bold'>University of Makati</span>, 
            taking the Bachelor&apos;s course of <span className="font-bold">Computer Science</span>.
          </p>
          <p className='sm:text-base text-sm'>I primarily focus on developing <span className="font-bold">websites</span>, <span className="font-bold">mobile applications</span>, and took <span className="font-bold">game development</span> as a hobby.</p>
        </div>
        <hr className="h-px w-3/4 my-2"/>
        <div className="mx-8">
          <p className='font-bold'>Technologies</p>
          <div className='flex flex-wrap justify-center items-center'>
            {technologies.map((tech, index) => (
              <NavLink title={<tech.icon size={30}/>} href={''} key={index} className='m-2'/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
