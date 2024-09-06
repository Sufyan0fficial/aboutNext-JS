import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-around items-center h-28 ">
      <div className="flex justify-between gap-6 items-center">
        <Link href={""}>
          <Image
            src={require("../../Public/ThemeForest Website images/logo-primary.webp")}
            alt="logo"
            className="w-[70px] h-[70px] "
          ></Image>
        </Link>

        <Link
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&to=msufyan0fficial.co@gmail.com"
          }
          target="blank"
          className="font-medium"
        >
          msufyan0fficial.co@gmail.com{" "}
        </Link>
      </div>
      <div className="flex justify-between items-center font-semibold gap-6 ">
        <div className="sm:hidden lg:flex lg:gap-6 xl:gap-7 2xl:gap-8">
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Services
          </Link>
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Works
          </Link>
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Resume
          </Link>
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Skills
          </Link>
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Testimonials
          </Link>
          <Link
            href={""}
            className="hover:text-violet-600 transition-colors  duration-500"
          >
            Contact
          </Link>
        </div>
        <a href={""} download={""}>
          <button
            type="submit"
            className="border bg-gradient-to-r from-slate-950 to-violet-600 hover:bg-gradient-to-l hover:duration-700 hover:transform font-bold px-7 py-3 rounded-full "
          >
            Hire me
          </button>
        </a>
        <div className="lg:hidden sm:flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
