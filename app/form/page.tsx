"use client";

import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField } from "@mui/material";
import Header from "../components/Header";

export default function AddPostForm() {
  //   const router = useRouter();

  //   const save = () => {

  //     addNewPost(newPost);
  //     router.push("/");

  //     if (!addNewPost) {
  //       console.log("Error");
  //     }
  //   };
  return (
    <>
      <Header />
      <Box
        component="form"
        //   onSubmit={form.handleSubmit(save)}
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
          id="demo-helper-text-aligned-no-helper"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          fullWidth
          label="Bild"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Beskrivning"
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
    </>
  );
}
