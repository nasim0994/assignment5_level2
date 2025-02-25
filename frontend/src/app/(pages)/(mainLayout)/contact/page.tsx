import { FiMap } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import ContactForm from "@/components/modules/home/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-10 sm:py-20">
      <div className="container">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div data-aos="zoom-in">
            <h2 className="text-4xl font-semibold sm:text-5xl text-neutral">
              Tell us about your <span className="text-secondary">project</span>
            </h2>

            <p className="mt-3 text-neutral-content text-sm">
              Let’s talk about your project! I’m ready to assist you. Whether
              you have questions about web development or design, or you’re
              looking to collaborate on a new project, feel free to send your
              message here, and I’ll respond promptly.
            </p>

            <div className="mt-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10  bg_gradient shadow-lg rounded-full flex justify-center items-center">
                    <AiOutlineMobile className="text-base-100 text-xl" />
                  </div>
                  <div>
                    <h3>Number</h3>
                    <p className="text-neutral-content">+880 1706 260 994</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg_gradient  shadow-lg rounded-full flex justify-center items-center">
                    <HiOutlineMail className="text-base-100 text-lg" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p className="text-neutral-content">
                      nasimuddin0994@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10  bg_gradient shadow-lg rounded-full flex justify-center items-center ">
                    <FiMap className="text-base-100" />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p className="text-neutral-content">Dhaka, bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
