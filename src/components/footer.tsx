import { Typography, Box, Container, Stack } from "@mui/material";

const HeaderBar: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 10,
        background: "#2d1b45",
        color: "white",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          spacing={2}
        >
          <Typography sx={{ fontWeight: 700 }}>
            © 2026 PurpleUI. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography sx={{ cursor: "pointer" }}>Privacy</Typography>

            <Typography sx={{ cursor: "pointer" }}>Terms</Typography>

            <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderBar;
