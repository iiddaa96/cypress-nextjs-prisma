import { db } from "@/prisma/db";
import { Post } from "@prisma/client";

export async function getAllPost() {
  try {
    await db.post.findMany();
  } catch (error) {
    console.error("Failed to retrieve all products");
    throw new Error("Failed to retrieve all products");
  }
}

export async function addNewPost(newPost: Post) {
  try {
    await db.post.create({
      data: newPost,
    });
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
  } catch (error) {
    console.error("Failed to delete post");
    throw new Error("Failed to delete post");
  }
}
