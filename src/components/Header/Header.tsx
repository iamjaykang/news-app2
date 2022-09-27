import React, { Dispatch, SetStateAction, useState } from "react";
import Hamburger from "hamburger-react";
import categories from "../../data/categories";
import "./Header.css";
import oneNewsLogo from "../../images/logo.png";

interface HeaderProps {
  category: string;
  index: number;
  setCategory: Dispatch<SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ setCategory }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="header-container max-h-15 p-4">
      <div className="container flex mx-auto">
        <div className="lg:hidden row between-xs middle-xs header-bar flex-1 my-auto">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <ul className="nav-list absolute text-xl text-left leading-8 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <h2 className="font-bold border-b-2 border-black pl-2">news</h2>
              {categories.map((category, index) => (
                <li
                  key={category}
                  onClick={() => setCategory(category)}
                  className={`${category} pl-2 cursor-pointer hover:bg-gray-200`}
                >
                  {category}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="icon justify-start">
          <img src={oneNewsLogo} className="max-h-14 mx-auto float-left" />
        </div> 
        <ul className="hidden lg:flex nav-list text-lg pl-8 w-full bg-white dark:bg-gray-700 my-auto justify-around">
          {categories.map((category, index) => (
            <li
              key={category}
              onClick={() => setCategory(category)}
              className={`${category} pl-2 cursor-pointer w-full`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
