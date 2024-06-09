'use client'
import { useState } from "react";
import NavLink from "./(ui)/components/nav-link";
import ComingSoon from "./(ui)/(pages)/coming-soon/page";

export default function Home() {
  const isComingSoon = useState<boolean>(false);

  if(isComingSoon){
    return <ComingSoon/>
  }

  return ( 
    <main className="w-full h-screen flex flex-col justify-center items-center sm:text-sm md:text-lg lg:text-xl">
      <div className="w-1/2 flex justify-evenly items-end">
          <NavLink href='#about' title='About'/>
          <div>
            <h1 className='flex justify-center text-center'>Richmond Viloria</h1>
          </div>
          <NavLink href='#projects' title='Projects'/>
      </div>
      <hr className="h-px my-4"></hr>
      <div className='flex justify-evenly w-1/3'>
        <NavLink href='https://github.com/Shinitaii' title='G'/>
        <NavLink href='https://www.linkedin.com/in/richmond-glenn-viloria/' title='L'/>
        <NavLink href='mailto:rgviloria1@gmail.com' title='E'/>
      </div>
    </main>
  );
}