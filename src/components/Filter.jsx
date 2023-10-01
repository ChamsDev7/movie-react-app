import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import { categories } from "../data/categories";

const Filter = ({ selectedCategories, handleCategoryChange }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          fullWidth
          multiple
          name="category"
          variant="outlined"
          input={<OutlinedInput label="Category" />}
          onChange={handleCategoryChange}
          value={selectedCategories}
        >
          {categories.map(({ label, value }, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

Filter.propTypes = {
  selectedCategories: PropTypes.array.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Filter;
