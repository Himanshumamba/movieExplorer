import Carousel from "../components/Carousel";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <main className="main-content">
        <Carousel category="popular" title="Popular Movies" />
        <Carousel category="top_rated" title="Top Rated Movies" />
        <Carousel category="upcoming" title="Upcoming Movies" />
      </main>
    </div>
  );
};

export default Home;
