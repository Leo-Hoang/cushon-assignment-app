import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import "../styles/investmentCard.css";

const InvestmentCard = () => {
  return (
    <Card className="custom-card">
      <Box className="card-header">
        <Typography variant="h5" className="header-text">
          Funds you can invest in today
        </Typography>
      </Box>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} className="card-section">
            <Typography variant="h5">Cash</Typography>
            <LocalAtmIcon fontSize="large" className="icon" />
            <p>This is some text explaining the cash fund.</p>
          </Grid>
          <Grid item xs={6} className="card-section">
            <Typography variant="h5">Equities</Typography>
            <TrendingUpIcon fontSize="large" className="icon" />
            <p>This is some text explaining the Equities fund.</p>
          </Grid>
          <Grid item xs={6} className="card-section">
            <Typography variant="h5">Fixed</Typography>
            <AccountBalanceIcon fontSize="large" className="icon" />
            <p>This is some text explaining the Fixed fund.</p>
          </Grid>
          <Grid item xs={6} className="card-section">
            <Typography variant="h5">Alternative</Typography>
            <SavingsIcon fontSize="large" className="icon" />
            <p>This is some text explaining the Alternative fund.</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
