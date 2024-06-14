"use server";

import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getAllPost() {
  try {
    await db.post.findMany();
  } catch (error) {
    console.error("Failed to retrieve all products");
    throw new Error("Failed to retrieve all products");
  }
}

export async function addNewPost(newPost: Prisma.PostCreateInput) {
  try {
    await db.post.create({
      data: newPost,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to add new post");
    throw new Error("Failed to add new post");
  }
}

export async function deletePost(id: number) {
  try {
    await db.post.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to delete post");
    throw new Error("Failed to delete post");
  }
}
