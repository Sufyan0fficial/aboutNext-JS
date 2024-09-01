import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col py-8 px-4 rounded-md bg-gradient-to-r from-slate-900 to-slate-950 gap-4 md:flex-row-reverse   md:justify-center md:gap-8">
      <div className="hidden md:block md:flex md:flex-col md:justify-evenly">
        <p className="max-w-[15ch] text-[3rem] leading-[1.1] font-extrabold text-slate-400 tracking-tight">
          Hi, I am{" "}
          <span className="text-rose-700 dark:text-blue-700">
            Front-end Developer
          </span>{" "}
          & Generative AI Engineer
        </p>

        <p className="max-w-[40ch] text-lg ">
          I design and code beautifully simple things and i love what i do .
          Just simple like that !
        </p>
      </div>
      <p className="max-w-[20ch] text-[1.65rem] leading-snug font-bold md:hidden">
        Hi, I am <span className="text-rose-700">Front-end Developer</span> &
        Generative AI Engineer
      </p>
      <div className="md:w-[400px] md:flex md:justify-start  md:object-cover p-0">
        <img
          src="/Sufyan-1.jpg"
          alt="Sufyan"
          className="my-4 rounded-md object-cover shadow-slate-950 shadow-2xl my-0 "
        />
      </div>

      <p className="max-w-[40ch] text-lg md:hidden">
        I design and code beautifully simple things and i love what i do . Just
        simple like that !
      </p>
    </div>
  );
}
