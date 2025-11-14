import React from "react";
import { useNavigate } from "react-router-dom";
import { posterPath } from "../api/tmdb";

interface MovieCardProps {
  movie: any;
  category: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer w-48"
      onClick={() => navigate(`/movie/${category}/${movie.id}`)}
    >
      <img
        src={posterPath(movie.poster_path)}
        alt={movie.title}
        className="rounded-lg shadow-lg w-full"
      />
      <p className="mt-2 text-sm font-medium">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
