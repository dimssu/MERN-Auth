import { Container, Typography, Paper, Grid, Box } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AutoModeIcon from '@mui/icons-material/AutoMode';
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <Container className="about" maxWidth="lg">
        <Box my={4}>
          <Typography variant="h2" align="center" gutterBottom>
            <div className="heading-about">About GreenHomeIQ</div>
          </Typography>
          <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#f0f7f0" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  As global concerns about climate change and resource depletion
                  intensify, the pursuit of sustainable and energy-efficient
                  living has gained momentum. GreenHomeIQ aims to address these
                  challenges by integrating Artificial Intelligence (AI) and the
                  Internet of Things (IoT) to create an eco-friendly,
                  energy-efficient smart home system. Our mission is to
                  transform homes into smarter, greener spaces where energy is
                  optimized, waste is minimized, and the environment thrives
                  alongside modern comfort.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <AutoModeIcon sx={{ fontSize: 170, color: "purple" }} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  The GreenHomeIQ Difference
                </Typography>
                <Typography variant="body1" paragraph>
                  While existing smart home systems often focus on convenience
                  and security, GreenHomeIQ goes beyond by prioritizing energy
                  sustainability. Our system actively reduces energy waste and
                  promotes sustainable living, making a real impact on your
                  carbon footprint. Unlike conventional systems, our focus is on
                  long-term environmental and economic benefits—helping you
                  create a home that is not only smarter but also greener.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Our Technology
                </Typography>
                <Typography variant="body1" paragraph>
                  The core of GreenHomeIQ lies in its advanced AI algorithms,
                  which analyze energy usage patterns to predict and manage
                  power consumption more efficiently. Coupled with IoT
                  integration, our system enables real-time monitoring and
                  control of energy usage across all connected devices. This
                  smart home ecosystem adjusts to your daily routines,
                  optimizing energy without compromising comfort.
                </Typography>
                <Typography variant="body1" paragraph>
                  Whether it's regulating your heating, cooling, or lighting,
                  our AI-powered system learns from your preferences and habits
                  to minimize unnecessary energy consumption while ensuring
                  optimal performance.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Our Impact
                </Typography>
                <Typography variant="body1" paragraph>
                  GreenHomeIQ is not just about cutting-edge technology—it's
                  about making a tangible impact on the environment. By
                  integrating our solution into your home, you're contributing
                  to the global movement to reduce greenhouse gas emissions and
                  conserve natural resources. Each household that embraces
                  smart, eco-friendly living is a step toward a sustainable
                  future.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Vision for the Future
                </Typography>
                <Typography variant="body1" paragraph>
                  Our vision is to become a leader in the sustainable smart home
                  market, empowering millions of homeowners to adopt greener
                  living solutions. As we continue to innovate and expand our
                  offerings, we aim to integrate even more advanced features,
                  such as renewable energy management and carbon tracking, to
                  ensure that homes can generate as much energy as they consume.
                </Typography>
                <Typography variant="body1" paragraph>
                  At GreenHomeIQ, we believe that every home can be a part of
                  the solution. Together, we can build a future where
                  sustainability and technology go hand in hand, creating a
                  healthier planet for generations to come.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <LightbulbIcon sx={{ fontSize: 60, color: "#ffa000" }} />
                  <Typography variant="h6" gutterBottom>
                    Intelligent Energy Management
                  </Typography>
                  <Typography variant="body2">
                    AI-powered algorithms optimize your home's energy
                    consumption.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <HomeIcon sx={{ fontSize: 60, color: "#1976d2" }} />
                  <Typography variant="h6" gutterBottom>
                    Comprehensive Home Integration
                  </Typography>
                  <Typography variant="body2">
                    Seamlessly connect and control all your smart devices.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <RecyclingIcon sx={{ fontSize: 60, color: "#4caf50" }} />
                  <Typography variant="h6" gutterBottom>
                    Eco-Friendly Living
                  </Typography>
                  <Typography variant="body2">
                    Reduce your environmental impact without sacrificing
                    comfort.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default About;
