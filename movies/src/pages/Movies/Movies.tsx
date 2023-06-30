import { useState, useEffect, useCallback } from "react";
import useDebonuce from "../../hooks/useDebounce";
import MovieComponent from "../../components/Movie/MovieComponent";
import { IMovie } from "../../models/IMovie";
import styles from "./Movies.module.css";
import { useQuery, useQueryClient } from "react-query";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesSearch, setMoviesSearch] = useState("");
  const debouncedSearch = useDebonuce(moviesSearch, 500);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:8080/api/movies/${debouncedSearch}`
    );
    const data: IMovie[] = await response.json();
    // return response.json();
    setMovies(data);
    setIsLoading(false);
  }, [debouncedSearch]);

  // const { data, status, error } = useQuery("movies", fetchMovies);

  // if (status === "loading") {
  //   console.log("loading");
  // }

  // if (status === "error") {
  //   console.log("error", error);
  // }

  // if (status === "success") {
  //   console.log("success", data);
  // }

  useEffect(() => {
    if (debouncedSearch) fetchMovies();
  }, [debouncedSearch, fetchMovies]);

  const clearSearch = () => {
    console.log("clear");
    setMovies([]);
    setMoviesSearch("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.cover}></div>
      <div className={styles.center}>
        <h1 className={styles.title}>Search movies</h1>
        <div className={styles.controls}>
          <Input
            id="searchText"
            placeholder="Search..."
            search={true}
            value={moviesSearch}
            autoComplete="off"
            type="text"
            onChange={(e) => setMoviesSearch(e.target.value)}
          ></Input>
          <Button type="primary" onClick={clearSearch}>
            Clear
          </Button>
        </div>

        <div className={styles.concepts}>
          <p style={{ color: "#B6B8BF", fontWeight: "bold" }}>Key concepts:</p>
          <div className={styles.concept}>
            <p>Debounce</p>
            <p>Lucene</p>
          </div>
        </div>
      </div>

      <div className={styles.movies}>
        {isLoading && <span className={styles.loader}></span>}
        {!isLoading &&
          movies.length !== 0 &&
          movies.map((e: IMovie) => (
            <MovieComponent key={e.movieId} movie={e} />
          ))}
      </div>
    </div>
  );
};

export default Movies;
