import PropTypes from "prop-types";
import { Button, ButtonGroup, MenuItem, Select, Stack } from "@mui/material";

const CustomPagination = ({
  handlePageChange,
  currentPage,
  setPageSize,
  pageSize,
  totalPages,
  mobileDevice,
}) => {
  const direction = mobileDevice ? "column" : "row";
  return (
    <Stack direction={direction} spacing={3} justifyContent="space-between">
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev.
        </Button>
        <Button
          color="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </ButtonGroup>
      <Select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
        <MenuItem value={4}>4 per page</MenuItem>
        <MenuItem value={8}>8 per page</MenuItem>
        <MenuItem value={12}>12 per page</MenuItem>
      </Select>
    </Stack>
  );
};

CustomPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  mobileDevice: PropTypes.bool.isRequired,
};

export default CustomPagination;
