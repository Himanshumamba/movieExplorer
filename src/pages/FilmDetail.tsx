import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie, posterPath } from "../api/tmdb";
import Header from "../components/Header"; 
const FilmDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [movie, setMovie] = useState<any>(null);


  useEffect(() => {
    if (id) {
      getMovie(category, id)
        .then((data) => setMovie(data))
        .catch((err) => console.error(err));
    }
  }, [category, id]);

  const handleAddToWishlist = () => {
    if (!movie) return;
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (!wishlist.find((item: any) => item.id === movie.id)) {
      wishlist.push(movie);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist!");
    } else {
      alert("Already in Wishlist!");
    }
  };

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="film-detail">
            <Header />

  <div className="film-detail-container">

    <div className="film-image">
      <img src={posterPath(movie.poster_path)} alt={movie.title} />
    </div>

    <div className={`film-info ${category}`}>
      <h1 className="film-title">{movie.title}</h1>
      <p className="film-overview">{movie.overview}</p>

      <button className={`wishlist-button ${category}`} onClick={handleAddToWishlist}>
                &#10084;  	&#128930;
      </button>
    </div>
  </div>

  {/* Additional info section  */}
  <div className="film-additional-info">
    <p><strong>Release Date:</strong> {movie.release_date}</p>
    <p><strong>Rating:</strong> {movie.vote_average}</p>
    <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
    <p className="category-label">
      {category === "popular" ? "Trending Now" : category === "top_rated" ? "Top Rated" : "Coming Soon!"}
    </p>
  </div>
</div>

  );
};

export default FilmDetail;
