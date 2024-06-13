import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { Post } from "@prisma/client";
import Header from "./Header";

type Props = {
  post: Post;
};

export default function SingelPost({ post }: Props) {
  return (
    <main>
      <Header />
      <Grid container spacing={2}>
        <Grid
          item
          xs={10}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "5.3rem",
              marginBottom: { xs: "-4rem", sm: "-4rem", md: "4rem" },
              marginTop: "10px",
            }}
          >
            <div key={post.id}>
              <CardMedia
                component="img"
                src={post.image}
                alt={post.title}
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: {
                    xs: "auto",
                    sm: "300px",
                    md: "400px",
                    lg: "500px",
                    xl: "600px",
                  },
                  objectFit: "contain",
                }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "70px 10px" }}>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {post.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
