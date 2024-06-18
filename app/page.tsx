import { db } from "@/prisma/db";
import { Box, CardMedia } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MiddleImage from "./assets/flower.jpg";
import DeleteButton from "./components/DeleteButton";

export default async function Home() {
  const posts = await db.post.findMany({});

  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "-6.4rem",
            fontFamily: "Playwrite CO, sans-serif",
            backgroundColor: "#ffe1e1",
          }}
        >
          Ida´s parfym blogg
        </h1>

        <Box
          sx={{
            width: "99%",
            justifyContent: "center",
            position: "relative",
            paddingTop: "20%",
            margin: "32px auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Image
            src={MiddleImage}
            alt="Stor Bild"
            layout="fill"
            objectFit="cover"
          />
        </Box>

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
                  <DeleteButton post={post} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
