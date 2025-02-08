import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import { SignUpFormFields } from "@/app/(auth)/sign-up/page";

const signUp = async (signUpUserData: SignUpFormFields) => {
  const { data } = await axiosInstance.post("/sign-up", signUpUserData);
  return data;
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};
