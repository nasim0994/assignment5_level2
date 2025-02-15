"use client";
import "@/assets/styles/projects.css";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      title: "Shiksha Bithi - Online Educational Platform",
      description:
        "Shiksha Bithi is a modern educational platform designed to make learning easy, efficient, and secure for students of all levels. Built with the MERN stack (ReactJS, Express.js, MongoDB), the project ensures seamless functionality and scalability. Redux has been utilized for effective state management, making the platform robust and user-friendly.",
      technologies: "React, Tailwind CSS, Firebase",
      image: "/projects/shikshabithi.webp",
      codeLink: "https://github.com/nasim0994/shikshabithi",
      liveLink: "https://shikshabithi.nasimuddin.me",
    },
  ];

  return (
    <section className="pt-14">
      <div className="container">
        <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
          📰 Projects
        </h2>
        <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
          Get Recent Projects with <br />{" "}
          <span className="text-primary">{"<Source Code>"}</span>
        </h2>

        <ul className="grid">
          {projects?.map((project, index) => (
            <li
              key={index}
              className="sticky top-20 transform transition-transform duration-300"
              style={
                {
                  "--index": index + 1,
                  paddingTop: `calc(${index + 1} * 1.5em)`,
                  transform: `scale(${
                    1 + index * 0.02
                  }) translateY(${index}px)`,
                } as React.CSSProperties
              }
            >
              <div
                className={`project_stack_card ${
                  index % 2 === 0 ? "even" : "odd"
                }`}
              >
                <div className="project_img">
                  <Link href={project?.liveLink} target="_blank">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="project_content">
                  <h2 className="project_index absolute text-5xl font-bold opacity-30">
                    {index + 1}
                  </h2>

                  <h2 className="text-4xl font-semibold mb-4">
                    {project?.title}
                  </h2>
                  <div className="mt-3 text-gray-300 text-[15px]">
                    <p>{project?.description}</p>
                    <p className="mt-2 font-medium text-gray-100">
                      <span>Technologies:</span>{" "}
                      <span>{project?.technologies}</span>
                    </p>
                  </div>

                  <div className="links">
                    <Link href={project?.codeLink} target="_blank">
                      Code <FiGithub />
                    </Link>
                    <Link href={project?.liveLink} target="_blank">
                      Live Demo <HiOutlineExternalLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
