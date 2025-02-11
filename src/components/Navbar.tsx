import "../styles/navbar.css";
import cushonLogo from "../assets/logo.png";
import { Button, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Grid container className="navbar" alignItems="center" px={4} py={2}>
      <Grid item xs={6} container alignItems="center" gap={4}>
        <img src={cushonLogo} alt="Cushon Logo" className="logo" />
        <a href="https://www.cushon.co.uk/workplace-pensions">
          Workplace Pensions
        </a>
        <a href="https://www.cushon.co.uk/workplace-isa-and-savings">
          Workplace ISAs & Savings
        </a>
      </Grid>
      <Grid
        item
        xs={6}
        container
        justifyContent="flex-end"
        alignItems="center"
        gap={4}
      >
        <a href="https://www.cushon.co.uk/about">About</a>
        <a href="https://www.cushon.co.uk/resources">Resources</a>
        <a href="https://www.cushon.co.uk/journey/find-help">Help</a>
        <a href="https://help.cushon.co.uk/hc/en-gb/requests/new">Contact</a>
        <Button variant="contained" className="button">
          LOGOUT
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
