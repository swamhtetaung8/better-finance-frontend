import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuthCardLeftPanel = () => {
  return (
    <div className="flex-1 relative">
      <div className="w-full h-full absolute z-10 bg-betterFinance-tertiary/50"></div>
      <div className="w-full h-full absolute z-20 py-10 px-6 flex flex-col justify-between">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="text-white" size={30} />
          <h1 className="font-semibold text-xl text-white">
            Welcome to Better Finance
          </h1>
        </div>
      </div>
      <Image
        src={"/images/sign-in-background-image.jpg"}
        className="object-cover"
        fill
        alt="photo of a scenary"
      />
    </div>
  );
};

export default AuthCardLeftPanel;
