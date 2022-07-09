import { IMovie } from "../IMovie";

const MovieComponent = (props:{movie:IMovie}) => {
    const {movie}=props;
            
    return(
        <div className="movie">
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <hr/>
        </div>
    );
};
export default MovieComponent;