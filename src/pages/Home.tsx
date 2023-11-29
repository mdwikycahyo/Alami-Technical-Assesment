/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Project from "../components/Project";
import Article from "../components/Article";
import Contact from "../components/Contact";
import data from "../assets/data.json";

const Root: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<string>("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onChangeNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getThreshold = () => {
      // You can customize these values based on your design and preferences
      const desktopThreshold = 0.5;
      const mobileThreshold = 0.2;

      // You might need to adjust the width condition based on your specific breakpoints
      return window.innerWidth > 768 ? desktopThreshold : mobileThreshold;
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: getThreshold(),
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    // console.log(selectedNav);

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
    <div className="flex flex-col h-screen relative overflow-y-auto">
      <div className="p-3 mt-5 md:m-0 md:p-7 sticky top-0">
        <Navbar selectedNav={selectedNav} onChangeNav={onChangeNav} />
      </div>
      <div id="container" className="flex-1 overflow-y-auto">
        <div
          ref={homeRef}
          id="home"
          className="mx-8 md:ml-36 md:w-3/4 h-full flex items-center"
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
    </div>
  );
};

export default Root;
