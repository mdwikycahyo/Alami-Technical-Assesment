import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Project from "../components/Project";
import Article from "../components/Article";
import Contact from "../components/Contact";
import data from "../../data.json"

export default function Root() {
  const [selectedNav, setSelectedNav] = useState("home");
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const articlesRef = useRef(null);
  const contactRef = useRef(null);

  const onChangeNav = (id) => {
    // Smooth scroll to the selected section
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe the sections
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (articlesRef.current) {
      observer.observe(articlesRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (articlesRef.current) {
        observer.unobserve(articlesRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [selectedNav]);

  return (
    <>
      <div className="p-7 sticky top-0">
        <Navbar selectedNav={selectedNav} onChangeNav={onChangeNav} />
      </div>
      <div id="container" className="flex-1 overflow-y-auto">
        <div
          ref={homeRef}
          id="home"
          className="ml-36 w-3/4 h-full flex items-center"
        >
          <Home data={data} />
        </div>
        <div ref={projectsRef} id="projects" className="my-20">
          <Project data={data} />
        </div>
        <div ref={articlesRef} id="articles" className="my-20 ">
          <Article data={data} />
        </div>
        <div
          ref={contactRef}
          id="contact"
          className="mt-20 bg-black text-white item-center flex flex-col items-center"
        >
          <Contact data={data} />
        </div>
      </div>
    </>
  );
}
