import { CardInfo } from "@/interfaces";

interface BankCardProps {
  cardInfo: CardInfo | undefined;
}

export const BankCard = ({ cardInfo }: BankCardProps) => {
  return (
    <div className="border border-black rounded-md p-5 flex flex-col gap-5">
      <div className="self-end italic text-2xl font-bold tracking-widest">
        {cardInfo?.brand}
      </div>
      <div>
        <p className="text-xl font-bold tracking-widest">
          •••• •••• •••• {cardInfo?.last4}
        </p>
      </div>
      <div className="flex justify-between text-sm font-light">
        <div className="flex flex-col gap-1">
          <p>Cardholder</p>
          <p>{cardInfo?.cardholderName}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>Expire date</p>
          <p>
            {cardInfo?.expiryMonth}/{cardInfo?.expiryYear}
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>CVC</p>
          <p>{cardInfo?.cvc}</p>
        </div>
      </div>
    </div>
  );
};
