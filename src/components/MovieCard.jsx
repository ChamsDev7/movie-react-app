import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import formatNumber from "../utils/formatNumber";
import {
  incrementDislikes,
  incrementLikes,
  removeMovie,
} from "../slices/movie";

const MovieCard = ({ movie }) => {
  const { id, title, category, likes, dislikes } = movie;
  const dispatch = useDispatch();

  const handleRemoveMovie = () => {
    dispatch(removeMovie(id));
  };

  const handleIncrementLikes = () => {
    dispatch(incrementLikes(id));
  };

  const handleDecrementDislikes = () => {
    dispatch(incrementDislikes(id));
  };

  return (
    <Card
      key={id}
      sx={{
        p: 2,
      }}
    >
      <CardContent>
        <Typography
          color="text.primary"
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Chip label={category} variant="outlined" />
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Stack spacing={3} direction="row" alignItems="center">
            <Stack direction="row" alignItems="center">
              <Tooltip title="I like this">
                <IconButton aria-label="like" onClick={handleIncrementLikes}>
                  <ThumbUpOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Typography>{formatNumber(likes)}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Tooltip title="I dislike this">
                <IconButton
                  aria-label="dislike"
                  onClick={handleDecrementDislikes}
                >
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Typography>{formatNumber(dislikes)}</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Tooltip title="Remove">
              <IconButton aria-label="remove" onClick={handleRemoveMovie}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
