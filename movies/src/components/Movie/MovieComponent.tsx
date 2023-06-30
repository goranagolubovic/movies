import { IMovie } from "../../models/IMovie";
import styles from "./MovieComponent.module.css";

const MovieComponent = (props: { movie: IMovie }) => {
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};
export default MovieComponent;
