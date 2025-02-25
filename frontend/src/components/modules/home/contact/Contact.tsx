import { AiOutlineMobile } from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <div>
          <h2 className="w-max rounded-xl bg-secondary/10 px-3 py-1 text-xs text-secondary">
            📰 Contact
          </h2>
          <h2 className="mt-2 text-3xl font-bold text-neutral sm:text-4xl mb-2">
            Reach Out for Any <span className="text-primary">Inquiries</span> 👇
          </h2>
        </div>

        <div className="mt-4 grid md:grid-cols-2 gap-10 bg-secondary/5 border border-secondary rounded px-6 py-10">
          <div className="flex flex-col gap-6">
            <div>
            <p className="text-neutral-content text-sm opacity">
              Let’s talk about your project! I’m ready to assist you. Whether
              you have questions about web development or design, or you’re
              looking to collaborate on a new project, feel free to send your
              message here, and I’ll respond promptly.
            </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg_gradient shadow-lg rounded-full flex justify-center items-center">
                <AiOutlineMobile className="text-xl text-base-100" />
              </div>
              <div>
                <h3 className="text-neutral-content text-sm">Number</h3>
                <p className="text-neutral">+880 1706 260 994</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg_gradient text-base-100 shadow-lg rounded-full flex justify-center items-center">
                <HiOutlineMail className="text-xl" />
              </div>
              <div>
                <h3 className="text-neutral-content text-sm">Email</h3>
                <p className="text-neutral">nasimuddin0994@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg_gradient shadow-lg rounded-full flex justify-center items-center ">
                <FiMap className="text-lg text-base-100" />
              </div>
              <div>
                <h3 className="text-neutral-content text-sm">Location</h3>
                <p className="text-neutral">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex gap-3">
              <h2>Follow:</h2>
              <Link
                href="https://www.linkedin.com/in/mdnasimuddin"
                target="_blank"
                className="text-2xl hover:-translate-y-1 duration-300 text-primary"
              >
                <PiLinkedinLogoBold />
              </Link>
              <Link
                href="https://github.com/nasim0994"
                target="_blank"
                className="text-2xl hover:-translate-y-1 duration-300 text-primary"
              >
                <FiGithub />
              </Link>
              <Link
                href="https://www.facebook.com/nuaimhasannasim"
                target="_blank"
                className="text-2xl hover:-translate-y-1 duration-300 text-primary"
              >
                <FiFacebook />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
