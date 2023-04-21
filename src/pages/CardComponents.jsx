import React from "react";
import MediaCard from "../components/cards/MediaCard";
import { Typography } from "@mui/material";
import RecipeReviewCard from "../components/cards/RecipeReviewCard";
function CardComponents() {
  return (
    <div className="card-container">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        px={{ marginLeft: "10px" }}
      >
        Media Cards
      </Typography>

      <div className="media-card">
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        px={{ marginLeft: "10px" }}
      >
        Recipe Review Cards
      </Typography>
      <div className="recipe-card">
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
    </div>
  );
}

export default CardComponents;
