import NavLink from "../nav-link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectNavigationProps {
    currentProjectIndex: number;
    totalProjects: number;
    onPreviousProject: () => void;
    onNextProject: () => void;
    currentProjectName: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
    currentProjectIndex,
    totalProjects,
    onPreviousProject,
    onNextProject,
    currentProjectName,
}) => (
    <div className='bottom-0 sticky md:m-0 md:p-8 m-4 flex md:w-1/2 justify-between items-center'>
        <NavLink title={<FaChevronLeft size={20} />} href={""} onPressed={onPreviousProject} />
        <div className="flex flex-col items-center">
            <p>{currentProjectName}</p>
            <p>{currentProjectIndex + 1} / {totalProjects}</p>
        </div>
        <NavLink title={<FaChevronRight size={20} />} href={""} onPressed={onNextProject} />
    </div>
);

export default ProjectNavigation;