import { DataTable } from "@/components/DataTable";
import { columns, ColumnProps } from "@/components/column";
import data from "@/data/data.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Transactions = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
          <CardDescription className="text-md">
            Here are your recent transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data.transactions as ColumnProps[]}
          />
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Transactions;
