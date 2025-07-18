export interface Client {
  id: string;
  name: string;
  inn: string;
  status: "Active" | "Inactive";
  avatar: string;
  registeredAt: string;
}
