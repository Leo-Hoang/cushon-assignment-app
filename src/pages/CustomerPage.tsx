import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/customerPage.css";

import { Grid, Button, Typography, Box } from "@mui/material";
import "../styles/customerPage.css";
import { useNavigate } from "react-router-dom";
import InvestmentCard from "../components/InvestmentCard";

const CustomerPage = () => {
  const { investments, name } = useSelector(
    (state: RootState) => state.investment
  );
  const navigate = useNavigate();
  return (
    <div className="customer-page">
      <Box className="title">
        <Box>
          <Typography variant="h1">{`Hello, ${name}`} </Typography>
          <Typography style={{ marginTop: 12 }} variant="h2">
            Build healthy savings habits.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container direction="row" gap={8}>
          <Grid item md={5} sm={12}>
            <Box className="left-section">
              <Typography variant="h3">
                {investments.length
                  ? `£${investments[0].amount} invested into ${investments[0].fund} Fund`
                  : "No investments made"}
              </Typography>
              <Button
                onClick={() => navigate("/investment")}
                className="form-button"
              >
                {investments.length ? `Replace fund` : " Invest now"}
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <InvestmentCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CustomerPage;
