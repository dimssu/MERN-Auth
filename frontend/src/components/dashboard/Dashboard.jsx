import { Grid2, Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import './dashboard.css'

const energyData = [
  { month: "Jan", consumption: 300 },
  { month: "Feb", consumption: 280 },
  { month: "Mar", consumption: 250 },
  { month: "Apr", consumption: 220 },
  { month: "May", consumption: 200 },
  { month: "Jun", consumption: 180 },
];

const deviceUsageData = [
  { name: "HVAC", value: 40 },
  { name: "Lighting", value: 25 },
  { name: "Appliances", value: 20 },
  { name: "Electronics", value: 15 },
];

const automationSavingsData = [
  { category: "Lighting", manual: 100, automated: 70 },
  { category: "HVAC", manual: 200, automated: 150 },
  { category: "Security", manual: 50, automated: 40 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="heading">Smart Home Dashboard</h1>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Energy Consumption Over Time
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid2>

        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Device Usage Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceUsageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid2>

        <Grid2 item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Automation Savings Comparison
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={automationSavingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="manual" fill="#8884d8" name="Manual Usage" />
                <Bar
                  dataKey="automated"
                  fill="#82ca9d"
                  name="Automated Usage"
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid2>

        <Grid2 item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Energy Optimization Trend
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="consumption"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Dashboard;
