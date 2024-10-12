"use client";
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
import { HomePageDetail } from "./components/home-page";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      <HomePageDetail />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
