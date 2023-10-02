/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import { movies$ as moviesData } from "../data/movies";

import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Filter from "../components/Filter";
import CustomPagination from "../components/CustomPagination";
import { addMovies, getMovies } from "../slices/movie";
import Footer from "../components/Footer";

function Home() {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [isLoading, setLoading] = useState(false);

  const handleCategoryChange = useCallback((event) => {
    const {
      target: { value },
    } = event;

    setSelectedCategories(typeof value === "string" ? value.split(",") : value);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await moviesData;
      dispatch(addMovies(response));
    } catch (error) {
      console.error("Error fetching movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Apply filters based on selected categories
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(({ category }) =>
        selectedCategories.includes(category.toLowerCase())
      );

      setFilteredMovies(filtered);
    }
  }, [selectedCategories, movies]);

  // Paging logic
  const totalPages = Math.ceil(filteredMovies.length / pageSize);
  const visibleMovies = filteredMovies.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Container>
        <Box
          height="15vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Header title="Movie List" />
        </Box>
        <Box mt={3} mb={5}>
          <Filter
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
          />
        </Box>
        {visibleMovies.length === 0 && (
          <Box mt={3} mb={5}>
            <Typography>No data to display</Typography>
          </Box>
        )}
        {visibleMovies.length !== 0 && (
          <>
            <Box mb={5} sx={{ backgroundColor: "neutral.100", p: 3 }}>
              <MovieList movies={visibleMovies} />
            </Box>
            <Box mb={5}>
              <CustomPagination
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                setPageSize={setPageSize}
                pageSize={pageSize}
                totalPages={totalPages}
                mobileDevice={mobileDevice}
              />
            </Box>
          </>
        )}
        <Footer />
      </Container>
    </Box>
  );
}

export default Home;
