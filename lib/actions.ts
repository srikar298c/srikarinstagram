"use server"
import prisma from "./prisma";
import {getUserId} from "@/lib/utils"
import { revalidatePath } from "next/cache";
import { z } from "zod";import { CreatePost } from "./schemas";
import { redirect } from "next/navigation";
export async function createPost(values:z.infer<typeof CreatePost>) {
  const userId = await getUserId();
  const validateFields = CreatePost.safeParse(values);
  if(!validateFields.success){
    return{
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to CreatPost "
    }
  }
  const {fileUrl, caption}= validateFields.data;
  try {
    await prisma.post.create({
      data:{
        caption,
        fileUrl,
        user:{
          connect:{
            id: userId,
          },
        },
      },
    })
  } catch (error) {
    return{
      message:"Database Error: Failed to Create Post."
    }
  }
  revalidatePath("/dashboard")
  redirect('/dashboard')
} 