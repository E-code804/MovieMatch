import Hero from "../components/HomeComponents/Hero";
import HomeNav from "../components/HomeComponents/HomeNav";
import MovieDisplay from "../components/HomeComponents/MovieDisplay";

const Home = () => {
  return (
    <>
      <div className="home">
        <HomeNav />
        <Hero />
      </div>
      <MovieDisplay />
    </>
  );
};

export default Home;
