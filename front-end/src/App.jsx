import { useState } from "react";

function App() {
  const [preference, setPreference] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const response = await fetch("http://localhost:3000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: preference }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();
      setMovies(data.recommendations || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 flex items-center justify-center p-6">
    <div className="w-full max-w-3xl space-y-6">

      {/*  Header Box */}

      <div className="bg-gradient-to-br from-gray-500 to-blue-700 text-white p-6 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold"> Movie Recommendation App</h1>
        <p className="text-gray-400 mt-2">
           Enter a genre or short description
        </p>
      </div>

      {/* Input Box */}


      <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            placeholder="e.g. action movies with a strong female lead"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 px-6 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-center mt-4">{error}</p>
        )}
      </div>


      {/*  Movies Box */}

      {movies.length > 0 && (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Recommended Movies
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <li
                key={index}
                className="min-w-[180px] bg-gray-800 rounded-xl p-3 hover:scale-105 transition"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-56 object-cover rounded-lg mb-2"
                />

                <p className="font-semibold text-sm truncate">
                  {movie.title}
                </p>

                <p className="text-xs text-gray-400">
                  {movie.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
}

export default App;
