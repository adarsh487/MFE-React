import {
  Typography,
  Button,
  Box,
  Stack,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
const PRIMARY_COLOR = "#701cc4";

const HeaderBar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "white",
        borderBottom: "1px solid #f3e8ff",
      }}
      className="header-main"
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          // py: 1,
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              background: PRIMARY_COLOR,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#2d1b45",
            }}
          >
            PurpleUI
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Button sx={{ color: "#4b5563", fontWeight: 600 }}>Home</Button>

          <Button sx={{ color: "#4b5563", fontWeight: 600 }}>Features</Button>

          <Button sx={{ color: "#4b5563", fontWeight: 600 }}>About</Button>

          <Button
            variant="contained"
            sx={{
              background: PRIMARY_COLOR,
              color: "white",
              px: 3,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": {
                background: "#a855f7",
              },
            }}
          >
            Get Started
          </Button>

          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
