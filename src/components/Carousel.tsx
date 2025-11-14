import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { getCategory } from "../api/tmdb";
import { useEffect, useState } from "react";

interface CarouselProps {
  category: string;
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ category, title }) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getCategory(category).then((data) => setMovies(data.results));
  }, [category]);

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};


  return (
<div className="section">
  <h2 className="section-title">{title}</h2>

  <Slider {...settings}>
    {movies.map((movie) => (
      <div key={movie.id}>
        <MovieCard movie={movie} category={category} />
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Carousel;
