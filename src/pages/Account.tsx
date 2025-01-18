import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getCardData } from "@/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BankCard } from "@/components/BankCard";

const Transactions = () => {
  const { data : cardInfo, isLoading, isError } = useQuery({
    queryKey: ["info"],
    queryFn: getCardData,
  });

  return (
    <MaxWidthWrapper className="py-10">
      <Card className="py-5 md:px-10">
        <CardHeader>
          <CardTitle className="text-2xl">Account Details</CardTitle>
        </CardHeader>
        <CardContent>
          {isError ? (
            <div className="flex items-center justify-center">
              <p className="text-red-500 text-sm">
                Something went wrong, please try again
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
              <div className="md:col-span-1 order-2 md:order-1 px-2 md:px-0">
                <div className="grid grid-cols-3 text-sm">
                  <div className="col-span-1 flex flex-col gap-1">
                    <p>Card Name</p>
                    <p>CVC</p>
                    <p>Expiration</p>
                    <p>Brand</p>
                    <p>Cardholder</p>
                  </div>
                  <div className="col-span-2 flex flex-col gap-1">
                    {isLoading ? (
                      <>
                        {[...Array(5)].map((_, index) => (
                          <Skeleton key={index} className="h-5 w-full" />
                        ))}
                      </>
                    ) : (
                      <>
                        <p className="tracking-widest">
                          •••• •••• •••• {cardInfo?.last4}
                        </p>
                        <p>{cardInfo?.cvc}</p>
                        {cardInfo?.expiryMonth}/{cardInfo?.expiryYear}
                        <p>{cardInfo?.brand}</p>
                        <p>{cardInfo?.cardholderName}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                  <Button variant={"outline"}>Freeze Card</Button>
                  <Button variant={"outline"}>Replace Card</Button>
                  <Button variant={"outline"}>Cancel Card</Button>
                </div>
              </div>
              <div className="md:col-span-1 order-1 md:order-2">
                {isLoading ? (
                  <Skeleton className="h-40 w-full rounded-lg" />
                ) : (
                  <BankCard cardInfo={cardInfo} />
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Transactions;
