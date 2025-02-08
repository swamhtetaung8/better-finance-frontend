import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import { SignInFormFields } from "@/app/(auth)/sign-in/page";

const signIn = async (signInUserData: SignInFormFields) => {
  const { data } = await axiosInstance.post("/sign-in", signInUserData);
  return data;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};
