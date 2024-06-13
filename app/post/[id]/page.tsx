import SingelPost from "@/app/components/SinglePost";
import { db } from "@/prisma/db";

// Detta är server sidan för att rendera ut singel produkt sidan
export default async function ServerForSinglePost({
  params,
}: {
  params: { id: string };
}) {
  const postId = parseInt(params.id, 10);

  if (isNaN(postId)) {
    return <div>Invalid post ID</div>;
  }

  const post = await db.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return <SingelPost post={post} />;
}
