import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setInvestment } from "../redux/investmentSlice";
import { replaceInvestment } from "../api";
import { useNavigate } from "react-router-dom";
import { Funds, Investment } from "../types";
import { RootState } from "../redux/store";
import InvestmentCard from "../components/InvestmentCard";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "../styles/investmentFormPage.css";

const InvestmentForm = () => {
  const { control, handleSubmit } = useForm<Investment>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state: RootState) => state.investment);

  const funds = Object.values(Funds);

  const onSubmit = async (data: Investment) => {
    if (email) {
      const updatedInvestment = await replaceInvestment({
        ...data,
        email: email,
      });

      if (updatedInvestment) {
        dispatch(setInvestment([updatedInvestment]));
      }
      navigate("/");
    }
  };

  return (
    <div className="investment-page">
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginBottom: 40 }} variant="h2">
            Make an Investment
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Controller
              name="fund"
              control={control}
              rules={{ required: "Fund is required" }}
              render={({ field }) => (
                <>
                  <InputLabel>Select a fund</InputLabel>
                  <Select
                    style={{ marginBottom: 50 }}
                    {...field}
                    label="Select Investment Type"
                  >
                    {funds.map((fund) => (
                      <MenuItem key={fund} value={fund}>
                        {fund}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            <Controller
              name="amount"
              control={control}
              rules={{
                required: "Amount is required",
              }}
              render={({ field }) => (
                <>
                  <InputLabel>Enter a fund amount (£)</InputLabel>
                  <Input
                    {...field}
                    type="number"
                    fullWidth
                    required
                    placeholder="Enter a value"
                  />
                </>
              )}
            />
            <Box className="button-container">
              <Button variant="outlined" onClick={() => navigate("/")}>
                Back
              </Button>
              <Button type="submit">Submit</Button>
            </Box>
          </form>
        </Grid>

        <Grid item xs={12} md={6}>
          <InvestmentCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default InvestmentForm;
