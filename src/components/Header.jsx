import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <Typography variant="h4" color="textPrimary">
      {title}
    </Typography>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
