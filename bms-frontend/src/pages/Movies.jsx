import { allMovies } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        All Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allMovies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-[300px] object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-500">
              {movie.genre}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Movies;