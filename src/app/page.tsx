import Image from "next/image";
import { SocialIcon } from "react-social-icons"; // npm install react-social-icons
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-teal-200 via-white to-cyan-400 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full items-center font-mono font-bold text-3xl flex justify-center">
        <h1>Hi, I&apos;m Caridad.</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 flex w-full justify-center text-lg">
          Welcome to my portfolio!
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>

      

      <div className="relative flex place-items-center mx-auto rounded">
        <Image
          className="relative rounded-full border-2 border-teal-300"
          src="/Caridad.png"
          alt="Caridad.png Profile Picture"
          width={250}
          height={250}
        />
      </div>
  
      <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">

        <Link href="/about" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>About me</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learn more about my journey.</p>
    
        </Link>

        <a
          href="https://github.com/charitety/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out what I&apos;ve been working on.
          </p>
        </a>

        <a
          href="mailto:charitety@gmail.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Let&apos;s connect
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We can work and learn together.
          </p>
        </a>
      </div>
      <div className="flex gap-4 mt-4">
        <SocialIcon url="https://www.linkedin.com/in/caridadrobles/" fgColor="#ffffff" />
        <SocialIcon url="https://www.github.com/charitety/" fgColor="#ffffff" />
        <SocialIcon url="https://www.instagram.com/charitety/" fgColor="#ffffff" />
      </div>
      <div
        className={"w-full items-center font-mono text-sm flex justify-center"}
      >
        Built in NYC
      </div>
      
    </main>
    
  );
  
}
