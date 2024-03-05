import { auth } from "@/auth"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUserId = async ()=>{
  const session = await auth();
  const userId = session?.user?.id;
  if(!userId){
    throw new Error("You have to sign in to play with my clone ")
  }
  return userId;
}