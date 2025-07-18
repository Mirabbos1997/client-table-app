import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Avatar,
  Chip,
} from "@mui/material";
import { type Client } from "../../types/Client";

interface ClientTableProps {
  data: Client[];
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

const ClientTable: React.FC<ClientTableProps> = ({ data, sortOrder, setSortOrder }) => {
  return (
    <TableContainer component={Paper} elevation={3} className="shadow-lg">
      <Table>
        <TableHead sx={{ bgcolor: "#eff6ff" }}>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>INN</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>
              <TableSortLabel
                active
                direction={sortOrder}
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                Registered Date
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((client) => (
            <TableRow key={client.id} hover>
              <TableCell>
                <Avatar alt={client.name} src={client.avatar} />
              </TableCell>
              <TableCell className="font-medium text-gray-800">{client.name}</TableCell>
              <TableCell>{client.inn}</TableCell>
              <TableCell>
                <Chip
                  label={client.status}
                  color={client.status === "Active" ? "success" : "default"}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>
                {new Date(client.registeredAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientTable;
