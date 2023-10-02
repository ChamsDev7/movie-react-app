import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { categories } from "../data/categories";

const Filter = ({ selectedCategories, handleCategoryChange }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          multiple
          label="Category"
          name="category"
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
