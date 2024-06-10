import { Dispatch, SetStateAction } from "react";
import NavLink from "../components/nav-link";

interface AboutSectionProps {
    navigate: Dispatch<SetStateAction<string>>;
}
  
const AboutSection : React.FC<AboutSectionProps> = ({navigate}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <NavLink title={'back'} href={""} onPressed={() => navigate('home')}></NavLink>
    </div>
  )
}

export default AboutSection;
