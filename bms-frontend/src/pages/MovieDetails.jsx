import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
   <div className="w-full h-[400px] bg-black flex items-center justify-center rounded">
  <img
    src={movie.posterUrl}
    alt={movie.title}
    className="h-full object-contain"
  />

      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>

      <p className="mt-2 text-gray-600">
        {movie.genre.join(" | ")}
      </p>

      <p className="mt-2">⭐ {movie.rating}/10</p>

      <button
  className="mt-4 bg-red-500 text-white px-6 py-2 rounded"
  onClick={() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Login required");
    window.location.href = "/login";
  } else {
    window.location.href = `/booking/${movie._id}`;
  }
}}
>
  Book Tickets
</button>

    </div>
  );
};

export default MovieDetails;