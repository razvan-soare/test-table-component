import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  brand: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "brand",
    header: "Brand",
    getGroupingValue: (row) => row.brand,
    enableGrouping: true,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
