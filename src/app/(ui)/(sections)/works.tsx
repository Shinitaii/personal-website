import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavLink from "../components/nav-link";
import { FaChevronLeft } from "react-icons/fa";

interface WorksSectionProps {
    navigate: Dispatch<SetStateAction<string>>;
}

const WorksSection : React.FC<WorksSectionProps> = ({navigate}) => {
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
        <div className="w-full h-screen flex flex-col">
            <div className='absolute w-fit p-8'>
            <NavLink title={<FaChevronLeft size={isMobile ? 40 : 20}/>} href={""} onPressed={() => navigate('home')} animation="hover:-translate-x-2 focus:-translate-x-2 active:-translate-x-2"></NavLink>
            </div>
            
        </div>
    )
}

export default WorksSection;