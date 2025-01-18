import { Row, Table } from "@tanstack/react-table";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { Button } from "./ui/button";
import { ColumnProps } from "./column";

const csvConfig = mkConfig({
  fieldSeparator: ",",
  filename: "transaction", // export file name (without .csv)
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const exportExcel = (rows: Row<ColumnProps>[]) => {
  const rowData = rows.map((row) => row.original);
  const csv = generateCsv(csvConfig)(rowData);
  download(csvConfig)(csv);
};

interface DataTableDownloadProps<TData> {
  table: Table<TData>;
}

export function DataTableDownload<TData>({
  table,
}: DataTableDownloadProps<TData>) {
  return (
    <Button
      variant={"outline"}
      className="h-8"
      onClick={() =>
        exportExcel(
          table.getFilteredRowModel().rows as unknown as Row<ColumnProps>[]
        )
      }
    >
      Download
    </Button>
  );
}
