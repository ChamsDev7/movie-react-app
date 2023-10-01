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
import formatNumber from "../utils/formatNumber";
//import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const MovieCard = ({ movie }) => {
  const { id, title, category, likes, dislikes } = movie;

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
        <Stack spacing={4} direction="row">
          <Stack direction="row" alignItems="center">
            <Tooltip title="I like this">
              <IconButton aria-label="like">
                <ThumbUpOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Typography>{formatNumber(likes)}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Tooltip title="I dislike this">
              <IconButton aria-label="dislike">
                <ThumbDownOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Typography>{formatNumber(dislikes)}</Typography>
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
