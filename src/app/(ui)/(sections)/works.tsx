import { Dispatch, Key, SetStateAction, useEffect, useState } from "react";
import NavLink from "../components/nav-link";
import { FaChevronLeft, FaChevronRight, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import { BiLogoFlutter  } from "react-icons/bi";
import { SiCsharp, SiDart, SiExpress, SiMysql, SiMongodb,  } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image'
import { IconType } from "react-icons";

interface WorksSectionProps {
    navigate: Dispatch<SetStateAction<string>>;
}

interface TechnologyProp {
    icon: React.ElementType<{size: number}>;
    name: string;
}

const WorksSection : React.FC<WorksSectionProps> = ({navigate}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

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

    const items: Array<any> = [
        {
          name: 'OAS',
          description: 'An online attendance system.',
          url: 'https://github.com/Shinitaii/attendance-system',
          photos: [''],
          technologies: [
            { icon: FaJava, name: 'Java' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'GymRAWR',
          description: 'A gym management system.',
          url: 'https://github.com/Shinitaii/gymrawr',
          photos: [''],
          technologies: [
            { icon: FaJava, name: 'Java' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'Archivary',
          description: 'A library management system.',
          url: 'https://github.com/Shinitaii/archivary',
          photos: [''],
          technologies: [
            { icon: SiCsharp, name: 'C#' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'Landlord Utility Tool',
          description: 'A utility calculator website that helps calculate utilities.',
          url: 'https://github.com/Shinitaii/landlord-utility-tool',
          photos: [''],
          technologies: [
            { icon: IoLogoJavascript, name: 'JavaScript' },
            { icon: RiNextjsFill, name: 'Next.js' },
            { icon: SiMongodb, name: 'MongoDB' }
          ]
        },
        {
          name: 'Hanni Discord Bot',
          description: 'A discord bot that sends Hanni from NewJeans phoning pictures.',
          url: 'https://github.com/Shinitaii/hanni-bot',
          photos: [''],
          technologies: [
            { icon: IoLogoJavascript, name: 'JavaScript' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express' }
          ]
        },
        {
          name: 'Deck',
          description: 'A task management and flashcards system for students.',
          url: 'https://github.com/Shinitaii/deck',
          photos: [''],
          technologies: [
            { icon: SiDart, name: 'Dart' },
            { icon: BiLogoFlutter, name: 'Flutter' },
            { icon: IoLogoFirebase, name: 'Firebase' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express' }
          ]
        },
      ];

    const currentProject = items[currentProjectIndex];
    const currentPhoto = currentProject.photos[currentPhotoIndex];

    const navigateToNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % items.length);
        setCurrentPhotoIndex(0);
      };
    
    const navigateToPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        setCurrentPhotoIndex(0);
    };
    
    const navigateToNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % currentProject.photos.length);
    };
    
    const navigateToPreviousPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + currentProject.photos.length) % currentProject.photos.length);
    };

    return (
        <div className="w-full h-screen flex flex-col">
          <div className='absolute w-fit p-8 z-10'>
            <NavLink title={<FaChevronLeft size={isMobile ? 40 : 20} />} href={""} onPressed={() => navigate('home')} animation="hover:-translate-x-2 focus:-translate-x-2 active:-translate-x-2"></NavLink>
          </div>
          <div className='w-full h-screen flex flex-col justify-evenly items-center'>
            <div className='w-4/5 h-2/5'>
              <div className='flex h-full justify-between items-center'>
                <NavLink title={<FaChevronLeft size={20} />} href={""} onPressed={navigateToPreviousPhoto} />
                <div className='relative w-full h-full'>
                  <Image src={currentPhoto} fill={true} alt='' />
                </div>
                <NavLink title={<FaChevronRight size={20} />} href={""} onPressed={navigateToNextPhoto} />
              </div>
              <div className='flex justify-center'>
                {currentPhotoIndex + 1} / {currentProject.photos.length}
              </div>
              <div className='flex justify-between items-center'>
                <a href={currentProject.url} target="_blank" rel="noopener noreferrer">Link</a>
                <div className='flex'>
                  {currentProject.technologies.map((tech : TechnologyProp, index : Key) => (
                    <NavLink key={index} title={<tech.icon size={20} />} className="mx-1" href={""} />
                  ))}
                </div>
              </div>
            </div>
            <div className='w-1/2 flex justify-center text-justify'>
              {currentProject.description}
            </div>
          </div>
          <div className='bottom-0 sticky m-8 flex justify-between items-center'>
            <NavLink title={<FaChevronLeft size={20} />} href={""} onPressed={navigateToPreviousProject} />
            <div className="flex flex-col items-center">
              <p>{currentProject.name}</p>
              <p>{currentProjectIndex + 1} / {items.length}</p>
            </div>
            <NavLink title={<FaChevronRight size={20} />} href={""} onPressed={navigateToNextProject} />
          </div>
        </div>
      );
}

export default WorksSection;