import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import logo1 from "../../assets/smart home.jpg";
import logo2 from "../../assets/Energy Optimization.jpeg";
import logo3 from "../../assets/Smart Security.jpeg";
import './landingPage.css'

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const LandingPage = () => {
  return (
    <div className="landing-page">
      <StyledContainer maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          color="black"
          fontWeight={"bold"}
          gutterBottom
        >
          Welcome to GreenHomeIQ
        </Typography>
        <Typography variant="h5" align="center" color="black" paragraph>
          Revolutionize your living space with our smart home technologies.
          Automate your home and optimize energy consumption for a more
          efficient and comfortable lifestyle.
        </Typography>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/signup"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia image={logo1} title="Home Automation" />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Home Automation
                </Typography>
                <Typography>
                  Control your lights, thermostat, and appliances with ease
                  using our smart home automation features.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia image={logo2} title="Energy Optimization" />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Energy Optimization
                </Typography>
                <Typography>
                  Reduce your energy consumption and save money with our
                  intelligent energy management system.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia image={logo3} title="Smart Security" />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Smart Security
                </Typography>
                <Typography>
                  Enhance your home security with our integrated smart cameras,
                  sensors, and alert systems.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default LandingPage;
