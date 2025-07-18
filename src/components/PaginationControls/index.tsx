import React from "react";
import { Stack, Pagination } from "@mui/material";

interface PaginationProps {
  total: number;
  page: number;
  setPage: (value: number) => void;
  pageSize: number;
}

const PaginationControls: React.FC<PaginationProps> = ({ total, page, setPage, pageSize }) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
      <Pagination
        count={Math.ceil(total / pageSize)}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
        size="large"
      />
    </Stack>
  );
};

export default PaginationControls;
