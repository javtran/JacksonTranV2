import Image from "next/image";
import About from "./about";
import Navbar from "./navbar";
import Navcon from "./navcon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navcon />
      <div
        className="mx-auto min-h-screen max-w-screen-xl selection:bg-sky-400 selection:text-sky-900 px-8 sm:px-10 md:px-28
      "
      >
        <About />
        <div id="experience" className="block w-100 p-40 bg-slate-200">
          asdfasdfasdfasdf
        </div>
      </div>
    </div>
  );
}
