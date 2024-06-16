"use client";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addNewPost } from "../endpoints/post-endpoint";

const AddPostForm = () => {
  const router = useRouter(); // Skapa en instans av useRouter

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newPost = {
      title,
      image,
      content,
    };

    try {
      await addNewPost(newPost);
      console.log("Post added successfully!");
      router.push("/"); // Navigera till startsidan efter att inlägget har lagts till
    } catch (error) {
      console.error("Failed to add new post:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <TextField
        fullWidth
        label="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <TextField
        fullWidth
        label="Bild"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Innehåll"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button type="submit" variant="contained" sx={{ width: "150px" }}>
          <SaveIcon fontSize="large" />
          Spara
        </Button>
      </Box>
    </Box>
  );
};

export default AddPostForm;
