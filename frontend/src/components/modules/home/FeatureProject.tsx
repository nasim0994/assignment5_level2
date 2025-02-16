import "@/assets/styles/projects.css";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const project = {
  title: "Shiksha Bithi - Online Educational Platform",
  description:
    "Shiksha Bithi is a modern educational platform designed to make learning easy, efficient, and secure for students of all levels. Built with the MERN stack (ReactJS, Express.js, MongoDB), the project ensures seamless functionality and scalability. Redux has been utilized for effective state management, making the platform robust and user-friendly.",
  technologies: "React, Tailwind CSS, Firebase",
  image: "/projects/shikshabithi.webp",
  codeLink: "https://github.com/nasim0994/shikshabithi",
  liveLink: "https://shikshabithi.nasimuddin.me",
};

export default function FeatureProject() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
          📰 Feature Projects
        </h2>
        <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
          Showcasing My Best <br /> Featured{" "}
          <span className="text-primary">Project</span>
        </h2>

        <div className="mt-8 border rounded border-secondary bg-secondary/5 p-4 grid sm:grid-cols-2 gap-10 project_stack_card feature_project">
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
            <h2 className="text-4xl font-semibold mb-4 text-primary">
              {project?.title}
            </h2>
            <div className="mt-3 text-[15px]">
              <p>{project?.description}</p>
              <p className="mt-2 font-medium">
                <span>Technologies:</span> <span>{project?.technologies}</span>
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
      </div>
    </section>
  );
}
