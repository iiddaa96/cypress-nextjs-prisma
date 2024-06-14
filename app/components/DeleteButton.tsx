"use client";

import { Post } from "@prisma/client";
import { deletePost } from "../endpoints/post-endpoint";

interface Props {
  post: Post;
}

function DeleteButton({ post }: Props) {
  return (
    <button
      onClick={() => deletePost(post.id)}
      className={
        "mt-4 w-full py-2 px-4 text-red-700 font-bold rounded border-2"
      }
    >
      Ta bort
    </button>
  );
}

export default DeleteButton;
