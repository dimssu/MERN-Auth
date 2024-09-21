import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "./support.css";

const Support = () => {
  const faqs = [
    {
      question: "Where do I explore more services",
      answer: "You can go to the services page and explore more services.",
    },
    {
      question: "How do I track my usage in realtime",
      answer:
        "Go to your dashboard where you can find visualise your real time data.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
      question: "How long does the setup take?",
      answer:
        "Setup and installation takes 3-5 business days for domestic orders and 7-14 days for international orders.",
    },
  ];

  return (
    <div className="support-container">
      <Container  maxWidth="md" sx={{ py: 8 }}>
        <Typography className="sup-container" variant="h2" component="h1" gutterBottom align="center">
          <div className="heading">Support</div>
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Frequently Asked Questions
                </Typography>
                {faqs.map((faq, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" paragraph>
                  <EmailIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                  Email: support@example.com
                </Typography>
                <Typography variant="body1" paragraph>
                  <PhoneIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                  Phone: 9999999999
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:support@example.com"
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Support;
