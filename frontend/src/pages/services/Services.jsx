import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import SecurityIcon from "@mui/icons-material/Security";
import DevicesIcon from "@mui/icons-material/Devices";
import "./services.css";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

const services = [
  {
    title: "Smart Home Automation",
    description:
      "Control your entire home with a single app. Manage lights, thermostats, and more.",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    title: "Energy Optimization",
    description:
      "Reduce your energy consumption and save money with our AI-powered optimization system.",
    icon: <BoltIcon fontSize="large" />,
  },
  {
    title: "Home Security",
    description:
      "Keep your home safe with our advanced security systems and real-time monitoring.",
    icon: <SecurityIcon fontSize="large" />,
  },
  {
    title: "Device Integration",
    description:
      "Seamlessly connect all your smart devices for a truly interconnected home experience.",
    icon: <DevicesIcon fontSize="large" />,
  },
];

const subscriptions = [
  {
    title: "Basic",
    price: "₹999/month",
    features: [
      "Smart lighting control",
      "Basic energy monitoring",
      "Mobile app access",
      "24/7 support",
    ],
  },
  {
    title: "Premium",
    price: "₹1999/month",
    features: [
      "Full home automation",
      "Advanced energy optimization",
      "Security system integration",
      "24/7 support",
    ],
  },
  {
    title: "Ultimate",
    price: "₹2999/month",
    features: [
      "Everything in Premium",
      "AI-powered predictive maintenance",
      "Custom automation scenarios",
      "Priority support",
    ],
  },
];

const Services = () => {
  return (
    <div className="service-container">
      <Container className="services" maxWidth="lg" sx={{ py: 8 }}>
        <Typography align="center" gutterBottom>
          <div className="heading">Our Services</div>
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>{service.icon}</IconWrapper>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    align="center"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Typography
          className="heading"
          variant="h3"
          align="center"
          gutterBottom
        >
          <div className="heading">Subscription Plans</div>
        </Typography>
        <Grid container spacing={4}>
          {subscriptions.map((sub, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard className="subscription-card">
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    align="center"
                  >
                    {sub.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                    align="center"
                  >
                    {sub.price}
                  </Typography>
                  <ul>
                    {sub.features.map((feature, idx) => (
                      <Typography component="li" key={idx}>
                        {feature}
                      </Typography>
                    ))}
                  </ul>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
