import { DataTable } from "@/components/DataTable";
import { columns, ColumnProps } from "@/interfaces/column";
import data from "@/data/data.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Transactions = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
          <CardDescription className="text-md">Here are your recent transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data.transactions as ColumnProps[]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
