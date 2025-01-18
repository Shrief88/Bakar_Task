import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useQuery } from "@tanstack/react-query";
import { getCardData } from "@/api";

const Transactions = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["info"],
    queryFn: getCardData,
  });

  console.log(isError);
  return (
    <MaxWidthWrapper className="py-10">
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-1">{isLoading && <p>Loading</p>}</div>
            <div className="md:col-span-1">{isError && <p>Error</p>}</div>
          </div>
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Transactions;
