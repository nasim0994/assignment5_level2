"use client";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { MdHomeRepairService } from "react-icons/md";

import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
import Technologies from "@/components/shared/main/Technologies";

export default function AboutPage() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-5">
          <div className="bg-secondary/10 rounded p-4 lg:sticky top-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral">
                Hey! I&apos;m{" "}
                <span className="text-secondary">Nasim Uddin</span>
              </h2>
              <h3 className="mt-1 font-medium">MERN Stack Developer</h3>
            </div>

            <div className="mt-4">
              <Image
                src="/nasim.png"
                alt="nasim"
                width={500}
                height={500}
                className="mx-auto w-[90%]"
              />
            </div>

            <div className="mt-6 flex justify-center items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/mdnasimuddin"
                target="_blank"
                className="text-2xl w-10 h-10 text-secondary flex justify-center items-center rounded bg-secondary/20 hover:bg-secondary hover:text-base-100 duration-300"
              >
                <PiLinkedinLogoBold />
              </Link>
              <Link
                href="https://github.com/nasim0994"
                target="_blank"
                className="text-[22px] w-10 h-10 text-secondary flex justify-center items-center rounded bg-secondary/20 hover:bg-secondary hover:text-base-100 duration-300"
              >
                <FiGithub />
              </Link>
              <Link
                href="https://www.facebook.com/nuaimhasannasim"
                target="_blank"
                className="text-2xl w-10 h-10 text-secondary flex justify-center items-center rounded bg-secondary/20 hover:bg-secondary hover:text-base-100 duration-300"
              >
                <FiFacebook />
              </Link>
            </div>

            <div className="mt-4">
              <Link href="/resume.pdf" download>
                <button className="w-full bg-secondary text-base-100 border border-secondary py-2 px-4 rounded hover:bg-transparent hover:text-secondary duration-300">
                  Download Resume
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
              👨‍💼 About me
            </h2>
            <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
              A dedicated MERN Stack Developer 💻
            </h2>

            <div className="mt-3">
              My Name is Nasim. I am a professional MERN Stack
              Developer. I have 2.5 years experience as a Front-End Developer.
              As a Junior MERN Stack Developer, I possess an impressive arsenal
              of skills in HTML, CSS, Tailwind CSS , Bootstrap , JavaScript ,
              Reactjs, Nextjs, Redux, Nodejs, Expressjs, MongoDB, and Firebase .
              I excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
                📰 Skills
              </h2>
              <Technologies />
            </div>

            {/* Experiences */}
            <div className="mt-10">
              <h2 className="text-secondary text-xl font-semibold">
                Professional Work Experiences
              </h2>

              <div className="mt-4"></div>
              <VerticalTimeline layout={"1-column-left"}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid var(--secondary)",
                  }}
                  date="October 2023 - Present"
                  iconStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  icon={<MdHomeRepairService />}
                >
                  <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                    MERN Stack Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    eManager IT Ltd.
                  </h4>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "13px",
                      fontWeight: "300",
                      color: "#dddddd",
                    }}
                  >
                    Currently working as a MERN Stack Developer at eManager IT
                    Ltd., where I specialize in building dynamic web
                    applications using MongoDB, Express.js, React.js, and
                    Node.js. I focus on creating scalable solutions, optimizing
                    performance, and delivering user-friendly interfaces to meet
                    business goals.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid var(--secondary)",
                  }}
                  date="January 2023 - October 2023"
                  iconStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  icon={<CgWorkAlt />}
                >
                  <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                    Front-End Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Pidex Ltd.
                  </h4>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "13px",
                      fontWeight: "300",
                      color: "#dddddd",
                    }}
                  >
                    As a Front-End Developer at Pidex Ltd., I worked on building
                    responsive, user-friendly web interfaces using technologies
                    like HTML, CSS, JavaScript, and React.js. I collaborated
                    with design and backend teams to create high-performing,
                    dynamic web applications, ensuring an engaging and seamless
                    user experience across different devices.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid var(--secondary)",
                  }}
                  date="12-2020 - 01-2022 Remote(USA Buyer)"
                  iconStyle={{
                    background: "var(--secondary)",
                    color: "#fff",
                  }}
                  icon={<CgWorkAlt />}
                >
                  <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                    Web Designer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    regisroumila
                  </h4>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "13px",
                      fontWeight: "300",
                      color: "#dddddd",
                    }}
                  >
                    Worked remotely with a US-based client as a Web Designer,
                    where I designed and developed websites using HTML, CSS,
                    Bootstrap, and JavaScript. Focused on creating responsive
                    and visually appealing web pages, ensuring a smooth user
                    experience across various devices. Collaborated closely with
                    the client to meet their specific design needs and deliver
                    high-quality results on time.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
