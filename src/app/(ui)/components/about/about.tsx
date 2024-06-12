interface AboutDetailsProps {
    isMobile: boolean;
}

const AboutDetails : React.FC<AboutDetailsProps> = ({isMobile}) => {
    return (
        <div className='mx-8 flex justify-center items-center text-pretty flex-col'>
        {!isMobile ? (
            <>
                <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                    Since 2018, I have started <span className='font-bold'>programming as a passion</span>, 
                    and over the years have developed skill required to become a <span className='font-bold'>software developer</span>.
                </p>
                <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                    Since 2022, I am currently studying at the <span className='font-bold'>University of Makati</span>, 
                    taking the Bachelor&apos;s course of <span className="font-bold">Computer Science</span>.
                </p>
                <p className='md:text-lg text-sm text-justify'>
                    I primarily focus on developing <span className="font-bold">websites</span>, 
                    <span className="font-bold"> mobile applications</span>, and took 
                    <span className="font-bold"> game development</span> as a hobby.
                </p>
            </>
        ) : (
          <>
            <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                Since 2018, I have started <span className='font-bold'>programming as a passion</span> when I was fascinated by how games were made. I began learning 
                how to code and over the course of years have developed skill required to become a <span className='font-bold'>software developer</span>.
            </p>
            <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                Since 2022, I am currently studying at the <span className='font-bold'>University of Makati</span>, 
                taking the Bachelor&apos;s course of <span className="font-bold">Computer Science Major in Application Development</span>.
            </p>
            <p className='md:text-lg text-sm text-justify'>
                I primarily focus on developing <span className="font-bold">websites</span>, 
                <span className="font-bold"> mobile applications</span>, and took 
                <span className="font-bold"> game development</span> as a hobby.
            </p>
            <hr className="h-px w-3/4 md:my-4 my-2 border-yellow-300"/>
            <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                I value continuous learning, momentum and exploring the latest trends in technology.
            </p>
            <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                In terms of work, I value <span className="font-bold">team collaboration, clear communication, and dedication</span>. I always aim 
                to contribute positively to any team I am a part of.
            </p>
            <p className='md:text-lg text-sm text-justify' style={{ textAlignLast: 'justify' }}>
                Apart from tech, I love <span className="font-bold">watching/reading anything sci-fi, walking, and gaming</span>. These hobbies help me 
                unwind and often inspire new ideas for my projects.
            </p>
          </>  
        )}
        </div>
    )
}

export default AboutDetails;