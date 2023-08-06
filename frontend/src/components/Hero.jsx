import { useState } from "react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };
  return (
    <div className="hero w-full flex-center flex-col">
      <h1>Find your film</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
