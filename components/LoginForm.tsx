"use client";
import { signIn } from "next-auth/react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { calSans } from "@/app/fonts";
import GoogleSvg from "./GoogleSvg";
import { toast } from "sonner";

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${calSans.className} mb-3 text-2xl dark:text-black`}>
          Please log in to continue.
        </h1>

        <LoginButton />
      </div>
    </div>
  );
}

interface LoginButtonProps {
  className?: string;
}

function LoginButton({ className }: LoginButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`mt-4 w-full flex items-center justify-center gap-2 ${className}`}
      variant={"secondary"}
      aria-disabled={pending}
      onClick={() => signIn("google", { callbackUrl: "/dashboard" }).then(()=>
      toast.success("Sucessfully logged in"))}
    >
      <GoogleSvg className="w-6 h-6" />
      Log in with Google
    </Button>
  );
}