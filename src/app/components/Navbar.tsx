import React from 'react';

interface NavbarProps {
  selectedNav: string;
  onChangeNav: (nav: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedNav, onChangeNav }) => {
  return (
    <nav id="navbar" className="flex justify-end">
      <ul className="flex space-x-2">
        <li>
          <div
            onClick={() => onChangeNav('home')}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === 'home' ? 'font-bold' : 'hover:font-bold'
            } duration-300 cursor-pointer`}
          >
            HOME
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === 'home'
                  ? 'border-yellow-500'
                  : 'group-hover:border-yellow-500'
              } group-hover:border-yellow-500 transition-all duration-300`}
            ></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => onChangeNav('projects')}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === 'projects' ? 'font-bold' : 'hover:font-bold'
            }  duration-300 cursor-pointer`}
          >
            PROJECTS
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === 'projects'
                  ? 'border-yellow-500'
                  : 'group-hover:border-yellow-500'
              }  transition-all duration-300`}
            ></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => onChangeNav('articles')}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === 'articles' ? 'font-bold' : 'hover:font-bold'
            }  duration-300 cursor-pointer`}
          >
            ARTICLES
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === 'articles'
                  ? 'border-yellow-500'
                  : 'group-hover:border-yellow-500'
              }  transition-all duration-300`}
            ></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => onChangeNav('contact')}
            className={`font-roboto mx-8 text-2xl relative group ${
              selectedNav === 'contact' ? 'font-bold' : 'hover:font-bold'
            }  duration-300 cursor-pointer`}
          >
            CONTACT
            <span
              className={`absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${
                selectedNav === 'contact'
                  ? 'border-yellow-500'
                  : 'group-hover:border-yellow-500'
              }  transition-all duration-300`}
            ></span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
