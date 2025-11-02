import api from "./api.js";

export async function getCharacters({ page = 1, pageSize = 20 } = {}) {
  try {
    const response = await api.get("/character", { params: { page } });
    const characters = response.data.results.map((char) => ({
      id: char.id,
      name: char.name,
      status: char.status,
      species: char.species,
      originName: char.origin.name,
      image: char.image,
    }));
    return { items: characters.slice(0, pageSize) };
  } catch (error) {
    throw error;
  }
}
