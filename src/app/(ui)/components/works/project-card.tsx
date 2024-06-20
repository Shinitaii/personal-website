import { Key } from "react";
import { motion } from "framer-motion";
import NavLink from "../nav-link";
import PhotoNavigation from "./photo-navigation";

interface ProjectCardProps {
    isMobile: boolean;
    project: any;
    currentPhotoIndex: number;
    onNextPhoto: () => void;
    onPreviousPhoto: () => void;
}

interface TechnologyProp {
    icon: React.ElementType<{size: number}>;
    name: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ isMobile, project, currentPhotoIndex, onNextPhoto, onPreviousPhoto }) => {
    const currentPhoto = project.photos[currentPhotoIndex];

    return (
        <motion.div 
            key={project.name}
            className='w-full h-screen flex md:flex-row flex-col justify-evenly items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            <div className={'w-4/5 md:w-1/2 h-2/5 md:h-3/5 md:m-8 flex flex-col justify-evenly'}>
                <PhotoNavigation
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={project.photos.length}
                    currentPhoto={currentPhoto}
                    onNextPhoto={onNextPhoto}
                    onPreviousPhoto={onPreviousPhoto}
                />

                <div className='flex justify-between items-center'>
                    <NavLink href={project.url} title='Git Repository' className='text-xs md:text-base'/>
                    <div className='flex'>
                        {project.technologies.map((tech: TechnologyProp, index: Key) => (
                            <NavLink key={index} title={<tech.icon size={isMobile ? 30 : 25} />} className="mx-1" href={""} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 w-3/4 md:m-8 flex justify-center text-justify md:text-xl text-xs'>
                {project.description}
            </div>
        </motion.div>
    );
};

export default ProjectCard;