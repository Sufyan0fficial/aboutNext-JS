import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-violet-900 flex flex-col justify-center items-center md:flex-row md:justify-around xl:justify-center xl:mt-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-bold text-white text-lg md:w-[35ch] lg:text-xl lg:w-[45ch] xl:text-3xl xl:w-[40ch]">
          I am Sufyan
          <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-violet-300 block lg:text-4xl lg:w-[20ch] xl:text-7xl xl:w-[15ch] xl:leading-[75px]  xl:tracking-tighter w-[20ch]">
            Front End Developer + AI Enthusiest
          </span>
        </p>

        <Image
          src={require("../../Public/ThemeForest Website images/Sufyan.jpg")}
          alt="Muhammad Sufyan"
          className="w-[300px] h-[300px] border border-violet-600 rounded-xl md:hidden "
        ></Image>
        <p className="w-[40ch] text-slate-300 font-medium lg:text-xl">
          I break down complex user experience problems to create integrity
          focussed solutions that connect billions of people
        </p>
        <div className="flex justify-between items-center gap-6 mt-4">
          <Link href={""}>
            <button className="border bg-gradient-to-r from-slate-950 to-violet-600 hover:bg-gradient-to-l font-bold px-7 py-2 rounded-full xl:text-lg">
              Donwload CV
            </button>
          </Link>
          <div className="flex justify-between items-center gap-4 ">
            <Link href={""}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook icon</title>
                <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
              </svg>
            </Link>
            <Link href={""}>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>
            </Link>
            <Link href={""}>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                className="jam jam-github"
              >
                <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={require("../../Public/ThemeForest Website images/Sufyan.jpg")}
        alt="Muhammad Sufyan"
        className="w-[300px] h-[300px] border border-violet-600 rounded-xl hidden md:flex  xl:w-[400px] xl:h-[400px] "
      ></Image>
    </div>
  );
}

export default HeroSection;
