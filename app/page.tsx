"use client"; // This is a client component
import About from "./components/sections/about";
import Navbar from "./components/navbar";
import Navcon from "./components/navcon";
import Jobs from "./components/sections/jobs";
import Projects from "./components/sections/projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) return <div></div>;
  return (
    <div>
      <div className="background fixed w-screen h-screen"></div>
      <Navbar />
      <Navcon />
      <div className="fixed bottom-0 right-10 max-lg:hidden flex flex-col gap-2 items-center after:content-[' '] after:w-px after:h-20 after:bg-slate-200">
        <a
          href="mailto:jackson.tran00@gmail.com"
          className="text-slate-200 tracking-widest vertical-text fill-slate-200 hover:text-sky-400 focus-visible:text-sky-400 transform 
          hover:-translate-y-2 focus-visible:-translate-y-2"
        >
          jackson.tran00@gmail.com
        </a>
      </div>
      <div
        className="mx-auto min-h-screen max-w-screen-xl selection:bg-sky-400 selection:text-sky-900 px-8 max-sm:pt-20 md:px-16 lg:px-28
      "
      >
        <About />
        <Jobs />
        <Projects />
      </div>
    </div>
  );
}
