import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Directory from "@/components/Directory";
import Custom from "@/components/Custom";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <Hero />
      <Featured />
      <Custom />
      <Directory />
      <Contact />
    </>
  )
}