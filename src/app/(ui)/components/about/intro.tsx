import Image from 'next/image'

interface AboutIntroProps{
    isMobile: boolean;
}

const AboutIntro : React.FC<AboutIntroProps> = ({ isMobile }) => (
    <div className='w-fit flex flex-col justify-center items-center'>
      <Image src='/richmond-photo.jpg' height={isMobile ? 200 : 150} width={isMobile ? 200 : 150} alt='richmond' className="m-2 rounded-full"/>
      <p className='font-bold md:text-2xl text-base'>Richmond Glenn Viloria</p>
      <p>An aspiring software engineer</p>
    </div>
);

export default AboutIntro;