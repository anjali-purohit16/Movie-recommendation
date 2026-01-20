import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(import("@fastify/cors"), {
  origin: "*",
});
fastify.get("/", async () => {
  return { message: "Backend is running 🚀" };
});

fastify.post("/recommend", async (request, reply) => {
  try {
    const { userInput } = request.body;

    if (!userInput) {
      return reply.status(400).send({ error: "User input required" });
    }

    const query = encodeURIComponent(userInput);

    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      return reply.send({ recommendations: [] });
    }

    const movies = data.Search.slice(0, 5).map(movie => ({
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    reply.send({ recommendations: movies });

  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: "OMDb API failed" });
  }
});

fastify.listen({ port: 3000 }, () => {
  console.log(" Server running on http://localhost:3000");
});
