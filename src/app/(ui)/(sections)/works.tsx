import { Dispatch, Key, SetStateAction, useEffect, useState } from "react";
import NavLink from "../components/nav-link";
import { FaChevronLeft, FaChevronRight, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5'
import { BiLogoFlutter  } from "react-icons/bi";
import { SiCsharp, SiDart, SiExpress, SiMysql, SiMongodb,  } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from 'next/image'
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import ProjectCard from "../components/works/project-card";
import ProjectNavigation from "../components/works/project-navigation";

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
    const [isClickDisabled, setIsClickDisabled] = useState<boolean>(false);

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
          description: 'An online attendance system. With two members and taking the lead developer role, this project is created in 2022 with the help of Java Swing libraries, it serves as the final project in our Capstone subject. This application allows teachers to record and track attendance toward students.',
          url: 'https://github.com/Shinitaii/attendance-system',
          photos: [''],
          technologies: [
            { icon: FaJava, name: 'Java' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'GymRAWR',
          description: 'A gym management system. With four members and taking the lead developer role, this project is created in 2023 with the help of Java Swing libraries, it serves as the final project in our Computer Programming 2 subject. This application allows receptionists in the gym to track and maintain gym statuses such as check-in of members/guests, availability of trainers, and the maintenance of the gym equipment.',
          url: 'https://github.com/Shinitaii/gymrawr',
          photos: [''],
          technologies: [
            { icon: FaJava, name: 'Java' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'Archivary',
          description: 'A library management system. With five members and taking the lead back-end developer role, this project is created in 2024 using C# libraries, it serves as the final project in our Object-Oriented Programming subject. This application tracks available/unavailable books to be borrowed in a library, the users are also allowed to reserve and borrow books. ',
          url: 'https://github.com/Shinitaii/archivary',
          photos: [''],
          technologies: [
            { icon: SiCsharp, name: 'C#' },
            { icon: SiMysql, name: 'MySQL' }
          ]
        },
        {
          name: 'Landlord Utility Tool',
          description: 'A utility calculator website that helps calculate utilities. A solo side-project, created in 2023, with the help of Next.js and its libraries. This website allow users to calculate utilities such as electricity and water.',
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
          description: 'A discord bot that sends Hanni from NewJeans phoning pictures. A solo side-project created in 2023, with the help of Discord.js and Node.js.',
          url: 'https://github.com/Shinitaii/hanni-bot',
          photos: [''],
          technologies: [
            { icon: IoLogoJavascript, name: 'JavaScript' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express' },
            { icon: SiMongodb, name: 'MongoDB' }
          ]
        },
        {
          name: 'Deck',
          description: 'A task management and flashcards system for students. A final project for our Applications Development and Emerging Technologies course. With five members and taking the back-end developer role, this project is created in 2024 using Flutter and Flutterfire. This application serves as a tool for the productivity of the students, where they can manage the tasks, create decks and set flashcards for their upcoming exams/tasks.',
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

    const navigateToNextPhoto = () => {
  if (!isClickDisabled) {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % currentProject.photos.length);
    setIsClickDisabled(true);
    setTimeout(() => {
      setIsClickDisabled(false);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  }
};

const navigateToPreviousPhoto = () => {
  if (!isClickDisabled) {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + currentProject.photos.length) % currentProject.photos.length);
    setIsClickDisabled(true);
    setTimeout(() => {
      setIsClickDisabled(false);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  }
};

const navigateToNextProject = () => {
  if (!isClickDisabled) {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % items.length);
    setCurrentPhotoIndex(0); // Reset photo index when changing projects
    setIsClickDisabled(true);
    setTimeout(() => {
      setIsClickDisabled(false);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  }
};

const navigateToPreviousProject = () => {
  if (!isClickDisabled) {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setCurrentPhotoIndex(0); // Reset photo index when changing projects
    setIsClickDisabled(true);
    setTimeout(() => {
      setIsClickDisabled(false);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  }
};

    return (
        <div className="w-full h-screen flex flex-col">
          <div className='absolute w-fit p-8 z-10'>
            <NavLink title={<FaChevronLeft size={isMobile ? 40 : 20} />} href={""} onPressed={() => navigate('home')} animation="hover:-translate-x-2 focus:-translate-x-2 active:-translate-x-2"></NavLink>
          </div>
          <ProjectCard 
                isMobile={isMobile}
                project={currentProject} 
                currentPhotoIndex={currentPhotoIndex} 
                onNextPhoto={navigateToNextPhoto} 
                onPreviousPhoto={navigateToPreviousPhoto} 
            />
          <ProjectNavigation
                currentProjectIndex={currentProjectIndex}
                totalProjects={items.length}
                onPreviousProject={navigateToPreviousProject}
                onNextProject={navigateToNextProject}
                currentProjectName={currentProject.name}
            />
        </div>
      );
}

export default WorksSection;