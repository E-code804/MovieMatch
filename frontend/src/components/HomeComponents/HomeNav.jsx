//import React from "react";
import Search from "../../assets/search.svg";

const HomeNav = () => {
  return (
    <header className="w-full">
      <nav className="max-width flex justify-between items-center sm:px-16 px-6 py-4">
        <img src={Search} alt="search" className="w-10 h-10" />
        <h1>Movie Match</h1>
        <h1>Placeholder</h1>
      </nav>
    </header>
  );
};

export default HomeNav;
