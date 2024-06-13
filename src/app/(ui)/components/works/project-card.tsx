import { Dispatch, Key, SetStateAction } from "react";
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import NavLink from "../nav-link";
import PhotoNavigation from "./photo-navigation";

interface ProjectCardProps {
    project: any;
    currentPhotoIndex: number;
    onNextPhoto: () => void;
    onPreviousPhoto: () => void;
}

interface TechnologyProp {
    icon: React.ElementType<{size: number}>;
    name: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, currentPhotoIndex, onNextPhoto, onPreviousPhoto }) => {
    const currentPhoto = project.photos[currentPhotoIndex];

    return (
        <motion.div 
            key={project.name}
            className='w-full h-screen flex flex-col justify-evenly items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            <div className='w-4/5 h-2/5'>
                <PhotoNavigation
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={project.photos.length}
                    currentPhoto={currentPhoto}
                    onNextPhoto={onNextPhoto}
                    onPreviousPhoto={onPreviousPhoto}
                />
                <div className='flex justify-between items-center'>
                    <NavLink href={project.url} title='Git Repository' className='text-xs md:text-sm'/>
                    <div className='flex'>
                        {project.technologies.map((tech: TechnologyProp, index: Key) => (
                            <NavLink key={index} title={<tech.icon size={25} />} className="mx-1" href={""} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 w-3/4 flex justify-center text-justify text-xs'>
                {project.description}
            </div>
        </motion.div>
    );
};

export default ProjectCard;