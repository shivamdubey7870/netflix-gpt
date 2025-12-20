import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopratedMovies = () => {
    const dispatch = useDispatch();

  // Hook implementation goes here
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated" , API_OPTIONS);
      const data = await response.json();
      
        // Dispatch an action to store the top-rated movies in Redux store
        dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
}
  useEffect(() => {
    // Fetch top-rated movies logic
    getTopRatedMovies();
  }, [])
}

export default useTopratedMovies;

