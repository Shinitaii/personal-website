import NavLink from "../nav-link";

interface AboutTechnologiesProps {
    technologies: Array<any>;
    size: number;
}

const AboutTechnologies : React.FC<AboutTechnologiesProps> = ({technologies, size}) => {
    return (
        <div className="mx-8 md:w-5/6 flex flex-wrap justify-center items-center">
          <p className='font-bold'>Technologies</p>
          <div className='flex flex-wrap justify-center items-center'>
            {technologies.map((tech, index) => (
              <NavLink title={<tech.icon size={size}/>} href={''} key={index} className='m-2' delay={index * 0.1 + 0.75}/>
            ))}
          </div>
        </div>
    )
}

export default AboutTechnologies;