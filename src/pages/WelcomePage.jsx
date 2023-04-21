import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const WelcomePage = () => {
  const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  });

  const StyledTitle = styled(Typography)({
    fontWeight: "bold",
    fontSize: "48px",
    marginBottom: "16px",
  });

  const StyledSubtitle = styled(Typography)({
    fontSize: "24px",
    marginBottom: "32px",
  });

  const StyledButton = styled(Button)({
    fontSize: "20px",
    fontWeight: "bold",
    padding: "16px 32px",
    borderRadius: "50px",
    backgroundColor: "#4caf50",
    color: "white",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  });

  return (
    <StyledContainer sx={{marginLeft:"100px"}}>
      <StyledTitle>Welcome to My Project</StyledTitle>
      <StyledSubtitle>
      Here is my MUI design project, and I am excited to work with SimppWey on it.
      </StyledSubtitle>
      <StyledButton variant="contained" href="#">
        Get Started
      </StyledButton>
    </StyledContainer>
  );
};

export default WelcomePage;
