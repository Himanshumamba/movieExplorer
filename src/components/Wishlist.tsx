import{ useEffect, useState } from "react";
import { posterPath } from "../api/tmdb";
import Header from "../components/Header";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(saved);
  }, []);

  // Remove a movie from wishlist
  const handleRemove = (id: number) => {
    const updated = wishlist.filter((movie) => movie.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0)
    return (
      <div>
        <Header /> {/*  header */}
        <div className="wishlist-empty">
    
          <p>Your wishlist is empty!</p>
        </div>
      </div>
    );

  return (
    <div>
      <Header /> {/*  header */}
      <div className="wishlist-container">
        <h1>        &#10084; Total ({wishlist.length})</h1>
        <div className="wishlist-grid">
          {wishlist.map((movie) => (
            <div key={movie.id} className="wishlist-item">
              <img
                src={posterPath(movie.poster_path)}
                alt={movie.title}
                className="wishlist-image"
              />
              <h2 className="wishlist-title">{movie.title}</h2>
              <p className="wishlist-release">Release: {movie.release_date}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemove(movie.id)}
              >
                &#128936;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
