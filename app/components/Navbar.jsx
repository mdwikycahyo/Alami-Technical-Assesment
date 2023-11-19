import { useState } from "react";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("home");
  return (
    <nav id="navbar" className="flex justify-end">
      <ul className="flex space-x-2">
        <li>
          <a
            href="#home"
            onClick={() => setSelectedNav("home")}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === "home" ? "font-bold" : "hover:font-bold"
            } duration-300`}
          >
            HOME
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === "home"
                  ? "border-yellow-500"
                  : "group-hover:border-yellow-500"
              } group-hover:border-yellow-500 transition-all duration-300`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setSelectedNav("projects")}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === "projects" ? "font-bold" : "hover:font-bold"
            }  duration-300`}
          >
            PROJECTS
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === "projects"
                  ? "border-yellow-500"
                  : "group-hover:border-yellow-500"
              }  transition-all duration-300`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#articles"
            onClick={() => setSelectedNav("articles")}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === "articles" ? "font-bold" : "hover:font-bold"
            }  duration-300`}
          >
            ARTICLES
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === "articles"
                  ? "border-yellow-500"
                  : "group-hover:border-yellow-500"
              }  transition-all duration-300`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setSelectedNav("contact")}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === "contact" ? "font-bold" : "hover:font-bold"
            }  duration-300`}
          >
            CONTACT
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === "contact"
                  ? "border-yellow-500"
                  : "group-hover:border-yellow-500"
              }  transition-all duration-300`}
            ></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
