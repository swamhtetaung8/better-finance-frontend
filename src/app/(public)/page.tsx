import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-[250px] w-[400px]">
          <Image
            src="/images/logo.png"
            className="object-contain"
            fill
            alt="Logo of better finance brand"
          />
        </div>

        <Link href="/dashboard">
          <Button>To Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
