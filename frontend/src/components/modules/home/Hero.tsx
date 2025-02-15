import "@/assets/styles/hero.css";
import { FiFacebook } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero_wrap -mt-16">
      <div className="container relative z-20">
        <div className="grid items-center sm:grid-cols-2 gap-10 pt-40 lg:pt-32 pb-24 sm:pb-40">
          <div className="fade_up relative">
            {/* icon */}
            <div>
              <div className="topleft_icon">
                <DiNodejsSmall className="text-2xl text-gray-300" />
              </div>
              <div className="topright_icon">
                <FaReact className="text-xl text-gray-300" />
              </div>

              <div className="bottomright_icon">
                <SiTailwindcss className="text-xl text-gray-300" />
              </div>
            </div>

            <h3 className="w-max rounded-xl bg-base-100/10 px-3 py-1 text-xs text-base-100">
              🖥️ MERN Stack Developer
            </h3>

            <h2 className="my-4 text-2xl font-bold sm:text-5xl">
              Master Coding Skills with Real Projects
            </h2>

            <p className="text-sm text-gray-400">
              Unlock your coding potential with CodeGallery! Learn web
              development step-by-step through engaging tutorials on HTML,
              JavaScript, React, and more
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://github.com/nasim0994"
                target="_blank"
                className="text-[25px] hover:-translate-y-1 duration-300"
              >
                <PiLinkedinLogoBold />
              </Link>
              <Link
                href="https://github.com/nasim0994"
                target="_blank"
                className="text-[25px] hover:-translate-y-1 duration-300"
              >
                <FiGithub />
              </Link>
              <Link
                href="https://github.com/nasim0994"
                target="_blank"
                className="text-[25px] hover:-translate-y-1 duration-300"
              >
                <FiFacebook />
              </Link>
            </div>
          </div>

          <div>
            <div
              className="about_img w-[90%] sm:w-1/2 md:w-full lg:w-[83%] h-72 md:h-[23rem] lg:h-[27rem]"
              style={{ backgroundImage: "url('/nasim.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
