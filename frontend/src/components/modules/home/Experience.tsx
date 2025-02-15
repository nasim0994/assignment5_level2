"use client";
import "@/assets/styles/experience.css";
import { CgWorkAlt } from "react-icons/cg";
import { MdHomeRepairService } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
          📰 Experiences
        </h2>
        <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
          Professional Experiences That <br /> Define My Journey
        </h2>

        <br />
        <br />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--secondary)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--secondary)" }}
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
              style={{ fontSize: "14px", fontWeight: "300", color: "#dddddd" }}
            >
              Currently working as a MERN Stack Developer at eManager IT Ltd.,
              where I specialize in building dynamic web applications using
              MongoDB, Express.js, React.js, and Node.js. I focus on creating
              scalable solutions, optimizing performance, and delivering
              user-friendly interfaces to meet business goals.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--secondary)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--secondary)" }}
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
            <h4 className="vertical-timeline-element-subtitle">Pidex Ltd.</h4>
            <p
              className="mt-1"
              style={{ fontSize: "14px", fontWeight: "300", color: "#dddddd" }}
            >
              As a Front-End Developer at Pidex Ltd., I worked on building
              responsive, user-friendly web interfaces using technologies like
              HTML, CSS, JavaScript, and React.js. I collaborated with design
              and backend teams to create high-performing, dynamic web
              applications, ensuring an engaging and seamless user experience
              across different devices.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--secondary)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--secondary)" }}
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
            <h4 className="vertical-timeline-element-subtitle">regisroumila</h4>
            <p
              className="mt-1"
              style={{ fontSize: "14px", fontWeight: "300", color: "#dddddd" }}
            >
              Worked remotely with a US-based client as a Web Designer, where I
              designed and developed websites using HTML, CSS, Bootstrap, and
              JavaScript. Focused on creating responsive and visually appealing
              web pages, ensuring a smooth user experience across various
              devices. Collaborated closely with the client to meet their
              specific design needs and deliver high-quality results on time.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
