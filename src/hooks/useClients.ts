import { useEffect, useState } from "react";
import axios from "axios";
import type { Client } from "../types/Client";

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Client[]>("https://6878f7f863f24f1fdca03cce.mockapi.io/clients")
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      });
  }, []);

  return { clients, loading };
};
