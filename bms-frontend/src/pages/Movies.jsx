import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  // 🔍 Get search query
  const query = new URLSearchParams(search).get("search") || "";

  // 🎬 Fetch movies
  useEffect(() => {
    fetch("http://localhost:9000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // 🔥 Filter movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">Movies</h1>

      {filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {filteredMovies.map((movie) => (
            <div
              key={movie._id}
              className="cursor-pointer"
              onClick={() => navigate(`/movie/${movie._id}`)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="rounded"
              />
              <h2 className="font-semibold mt-2">{movie.title}</h2>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Movies;