import { ColumnDef } from "@tanstack/react-table";

export type ColumnProps = {
  amount: number;
  currency: string;
  cardholder: string;
  status: "Succeeded" | "Canceled" | "Failed" | "Refunded" | "Disputed";
  created: string;
};

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
    accessorFn: (row) => row.amount.toFixed(2),
  },
  {
    accessorKey: "currency",
    header: "Currency",
    accessorFn: (row) => row.currency,
  },
  {
    accessorKey: "cardholder",
    header: "Cardholder",
    accessorFn: (row) => row.cardholder,
  },
  {
    accessorKey: "status",
    header: "Status",
    accessorFn: (row) => row.status,
  },
  {
    accessorKey: "created",
    header: "Created",
    accessorFn: (row) => row.created,
  },
];
