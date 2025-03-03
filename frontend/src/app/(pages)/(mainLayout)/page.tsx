import Contact from "@/components/modules/home/contact/Contact";
import Experience from "@/components/modules/home/Experience";
import FeatureProject from "@/components/modules/home/FeatureProject";
import Hero from "@/components/modules/home/Hero";
import Projects from "@/components/modules/home/Projects";
import Skills from "@/components/modules/home/Skills";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <Hero />
      <Experience />
      <FeatureProject />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
