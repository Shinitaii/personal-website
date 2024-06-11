'use client'
import { useEffect, useState } from "react";
import HomeSection from "./(ui)/(sections)/home";
import AboutSection from "./(ui)/(sections)/about";
import { motion } from "framer-motion";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('home');

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
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.5 }}
        >
          {renderStation()}
        </motion.div>
    </main>
  );
}