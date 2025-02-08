import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import Cookies from "js-cookie";

const signOut = async () => {
  const token = Cookies.get("api_token");
  const { data } = await axiosInstance.post("/sign-out", {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: signOut,
  });
};
