import React, { useState, useEffect, useMemo } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useClients } from "./hooks/useClients";
import Filters from "./components/Filters";
import ClientTable from "./components/ClientTable";
import PaginationControls from "./components/PaginationControls";
import type { Client } from "./types/Client";

const PAGE_SIZE = 10;

const App: React.FC = () => {
  const { clients } = useClients();
  const [searchName, setSearchName] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState<number>(1);
  const [filtered, setFiltered] = useState<Client[]>([]);

  useEffect(() => {
    const data = clients.filter(
      (c) =>
        c.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (statusFilter ? c.status === statusFilter : true)
    );

    data.sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.registeredAt).getTime() - new Date(b.registeredAt).getTime()
        : new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
    });

    setFiltered(data);
    setPage(1);
  }, [searchName, statusFilter, sortOrder, clients]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <Box className="bg-gray-50 min-h-screen py-10">
      <Container maxWidth="lg">
        <Typography variant="h4" className="text-center text-blue-800 font-bold mb-6">
          Client Table
        </Typography>

        <Filters
          searchName={searchName}
          setSearchName={setSearchName}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <ClientTable
          data={paginatedData}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <PaginationControls
          total={filtered.length}
          page={page}
          setPage={setPage}
          pageSize={PAGE_SIZE}
        />
      </Container>
    </Box>
  );
};

export default App;
