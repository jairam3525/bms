import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Recommended = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="items-center flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            Recommended Movies
          </h2>

          <span
            onClick={() => navigate("/movies")}
            className="text-md text-red-500 cursor-pointer hover:underline"
          >
            See All
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="rounded overflow-hidden cursor-pointer"
              onClick={() => navigate(`/movie/${movie._id}`)}
            >

              <div className="relative">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover rounded"
                />
              </div>

              <div className="bg-black text-white text-sm px-2 py-1 flex items-center justify-between">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>

              <div className="px-2 py-1">
                <h3 className="font-semibold text-lg">
                  {movie.title}
                </h3>

                <p className="text-md text-gray-500">
                  {movie.genre.join(" | ")}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Recommended;