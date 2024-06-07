import Link from "next/link";

export default function Home() {
  return ( 
    <main className="w-full h-screen flex flex-col justify-center items-center sm:text-sm md:text-lg lg:text-xl">
      <div className="w-1/2 flex justify-evenly items-end">
        <Link href='#about'>About</Link>
        <div>
          <h1 className='flex justify-center'>Richmond Glenn Viloria</h1>
          <h3 className='flex justify-center'>An aspiring software engineer.</h3>
        </div>
        <Link href='#about'>Projects</Link>
      </div>
      <div className='flex justify-evenly w-1/2'>
        <a href='https://github.com/Shinitaii'>Github</a>
        <a href='https://www.linkedin.com/in/richmond-glenn-viloria/'>LinkedIn</a>
        <a href='mailto:rgviloria1@gmail.com'>Email</a>
      </div>
    </main>
  );
}
