import axios from "axios";
import { Investment } from "./types";

const URL = "http://localhost:5000";

export const getUserByEmail = async (email: string) => {
  const response = await axios.get(`${URL}/users?email=${email}`);
  const [user] = response.data;
  return user;
};

export const addInvestment = async (investment: Investment) => {
  const response = await axios.post(`${URL}/investments`, {
    email: investment.email,
    fund: investment.fund,
    amount: investment.amount,
  });
  return response.data;
};

export const replaceInvestment = async (investment: Investment) => {
  const existingInvestments = await axios.get(
    `${URL}/investments?email=${investment.email}`
  );
  const investments = existingInvestments.data;

  if (investments.length > 0) {
    const investmentId = investments[0].id;
    const response = await axios.put(`${URL}/investments/${investmentId}`, {
      email: investment.email,
      fund: investment.fund,
      amount: investment.amount,
    });
    return response.data;
  } else {
    addInvestment(investment);
  }
};

export const getInvestments = async (email: string): Promise<Investment[]> => {
  const response = await axios.get(`${URL}/investments?email=${email}`);
  return response.data;
};
