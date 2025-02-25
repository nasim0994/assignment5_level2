import "@/assets/styles/footer.css";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import CircularProgress from "./ProgressScroll";

export default function Footer() {
  return (
    <footer className="footer_wrap">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/nasim.png"
                alt=""
                className="w-10 h-10 rounded-full"
                width={500}
                height={500}
              />
              <p className="text-gray-300">
                Copyright © 2023. All rights are reserved
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href="https://www.linkedin.com/in/mdnasimuddin"
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
              href="https://www.facebook.com/nuaimhasannasim"
              target="_blank"
              className="text-[25px] hover:-translate-y-1 duration-300"
            >
              <FiFacebook />
            </Link>
          </div>
        </div>
      </div>

      <CircularProgress />
    </footer>
  );
}
