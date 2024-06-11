'use client'
import { useEffect, useState } from "react";
import HomeSection from "./(ui)/(sections)/home";
import AboutSection from "./(ui)/(sections)/about";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const renderLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    renderLoad();
  },[currentSection]);

  const renderStation = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection navigate={setCurrentSection} />;
      case 'about':
        return <AboutSection navigate={setCurrentSection} />;
      case 'works':
        return <HomeSection navigate={setCurrentSection} />
      default:
        return <HomeSection navigate={setCurrentSection} />;
    }
  }

  return ( 
    <main className="">
      {isLoading ? <div className='w-full h-screen flex justify-center items-center'>Loading...</div> : renderStation()}
    </main>
  );
}