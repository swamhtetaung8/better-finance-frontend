import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import { CreateTransactionFormFields } from "@/app/(dashboard)/dashboard/transactions/create/page";
import Cookies from "js-cookie";

const createTransaction = async (createTransactionUserData: CreateTransactionFormFields) => {
  const token = Cookies.get("api_token");
  const { data } = await axiosInstance.post("/transactions", createTransactionUserData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useCreateTransaction = () => {
  return useMutation({
    mutationFn: createTransaction,
  });
};
