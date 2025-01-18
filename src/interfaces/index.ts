export interface NavItem {
  label: string;
  to: string;
}

export interface CardInfo {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
}
