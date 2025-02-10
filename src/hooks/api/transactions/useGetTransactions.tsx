import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import Cookies from "js-cookie";

const getTransactions = async () => {
  const token = Cookies.get("api_token");
  const { data } = await axiosInstance.get("/transactions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
};
