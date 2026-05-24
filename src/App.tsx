// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>
//     </>
//   )
// }

import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { lazy } from "react";
const PRIMARY_COLOR = "#c084fc";

const RemoteHeader = lazy(() => import("mfeHeader/Header"));
const RemoteFooter = lazy(() => import("mfeFooter/Footer"));

const App = () => {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Optimized architecture with scalable frontend and backend systems.",
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Secure Platform",
      description:
        "Built with modern security standards and reliable authentication.",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: "Modern Experience",
      description:
        "Clean UI with responsive and user-focused application design.",
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    },

    {
      title: "Customer Support",
      description: "Be sure with 24 * 7 customer support.",
      icon: <ContactPhoneIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box sx={{ background: "#faf5ff", minHeight: "100vh" }}>
      {/* ================= HEADER ================= */}
      <RemoteHeader />

      {/* ================= HERO SECTION ================= */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          //
          sx={{
            minHeight: "85vh",
            py: 8,
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#2d1b45",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Build Modern
              <Box
                component="span"
                sx={{
                  color: PRIMARY_COLOR,
                  display: "block",
                }}
              >
                Scalable Products
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Create powerful applications with beautiful UI, scalable
              architecture, and exceptional user experience.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: PRIMARY_COLOR,
                  px: 4,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    background: "#a855f7",
                  },
                }}
              >
                Start Building
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: PRIMARY_COLOR,
                  color: PRIMARY_COLOR,
                  px: 4,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    borderColor: "#a855f7",
                    background: "#f3e8ff",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Grid>

          {/* <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: 420,
                borderRadius: "32px",
                background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 20px 60px rgba(192,132,252,0.35)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: 800,
                }}
              >
                Modern UI
              </Typography>
            </Box>
          </Grid> */}
        </Grid>

        {/* ================= FEATURES ================= */}
        <Box sx={{ py: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#2d1b45",
              mb: 2,
              textAlign: "center",
            }}
          >
            Features
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
              mb: 8,
              textAlign: "center",
            }}
          >
            Everything you need to build scalable applications.
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ marginY: "10px" }}
                key={index}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "24px",
                    background: "white",
                    border: "1px solid #f3e8ff",
                    p: 2,
                    height: "100%",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 15px 40px rgba(192,132,252,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "18px",
                        background: "#f3e8ff",
                        color: PRIMARY_COLOR,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#2d1b45",
                        mb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6b7280",
                        lineHeight: 1.8,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* ================= FOOTER ================= */}
      <RemoteFooter />
    </Box>
  );
};

export default App;
