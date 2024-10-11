import fetchData from "@/app/components/categories/fetchData";
import { Movie } from "@/app/interfaces/SimulationApiRequest";

export const getMovieById = async (id: string): Promise<undefined | Movie> => {
  try {
    const data = await fetchData();
    let result = data.find((movie) => {
      return movie._id === parseInt(id);
    });
    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
