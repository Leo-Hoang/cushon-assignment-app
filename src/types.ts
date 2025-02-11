export enum Funds {
  EQUITIES = "Equities",
  FIXED = "Fixed",
  ALTERNATIVE = "Alternative",
  CASH = "Cash",
}

export interface Fund {
  fundName: Funds;
  amount: number;
}

export interface User {
  email: string;
  name: string;
}

export interface Investment {
  email: string;
  amount: number;
  fund: Fund;
}

export interface InitialState {
  email: string;
  name: string;
  investments: Investment[];
}
