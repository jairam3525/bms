import { useParams } from "react-router-dom";
import { allMovies } from "../utils/constants";
import {useNavigate} from "react-router-dom";


const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = allMovies.find((m) => m.id === Number(id));

    if (!movie) {
        return <h1 className="text-center mt-10">Movie not found</h1>;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6">

                <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full md:w-1/3 rounded"
                />

                <div>
                    <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>

                    <p className="text-gray-600 mb-2">
                        ⭐ {movie.rating} / 10 ({movie.votes} votes)
                    </p>

                    <p className="mb-2">{movie.genre}</p>
                    <p className="mb-2">Language: {movie.languages}</p>
                    <p className="mb-4">Age: {movie.age}</p>

                    

                    

                    <button
                        onClick={() => navigate("/booking")}
                        className="bg-red-500 text-white px-6 py-2 rounded"
                    >
                        Book Tickets
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MovieDetails;
