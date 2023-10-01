import { Unstable_Grid2 as Grid } from "@mui/material";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <Grid container spacing={3} rowGap={4} columns={{ lg: 10, md: 10 }}>
      {movies.map((movie) => {
        return (
          <Grid key={movie.id} xs={12} md={5} lg={5}>
            <MovieCard key={movie.id} movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
