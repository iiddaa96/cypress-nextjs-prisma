import { db } from "@/prisma/db";
import { CardMedia } from "@mui/material";
import Link from "next/link";
import Header from "./components/Header";

export default async function Home() {
  const posts = await db.post.findMany({});

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-4">
        <h1 className="text-3xl mb-10 font-bold">Parfym blogg</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {posts.map((post) => (
            <div key={post.id} className="cursor-pointer">
              <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <Link href={`/post/${post.id}`} passHref>
                  <div className="relative">
                    <CardMedia
                      component="img"
                      className="w-full h-48 object-cover"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary">
                    {post.title}
                  </h3>
                  <button
                    // onClick={() => handleDelete(post.id)}
                    className={
                      "mt-4 w-full py-2 px-4 text-red-700 font-bold rounded border-2"
                    }
                  >
                    Ta bort
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
