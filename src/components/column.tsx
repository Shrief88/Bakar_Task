import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/DataTableColumnHeader";

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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    accessorFn: (row) => row.amount.toFixed(2),
  },
  {
    accessorKey: "currency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
    accessorFn: (row) => row.currency,
  },
  {
    accessorKey: "cardholder",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cardholder" />
    ),
    accessorFn: (row) => row.cardholder,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    accessorFn: (row) => row.status,
  },
  {
    accessorKey: "created",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.created).getTime();
      const dateB = new Date(rowB.original.created).getTime();
      return dateA - dateB;
    },
    accessorFn: (row) => row.created,
  },
];
