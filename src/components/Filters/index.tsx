import React from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";

interface FiltersProps {
  searchName: string;
  setSearchName: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  searchName,
  setSearchName,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <Stack spacing={2} direction={{ xs: "column", md: "row" }} sx={{ mb: 3 }}>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        fullWidth
        className="bg-white"
      />

      <FormControl fullWidth className="bg-white">
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Filters;
