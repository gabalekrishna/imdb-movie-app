import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";


const Favorite= ({
  title,
  releaseDate,
  description,
  imageUrl,
  rating,
  onRate,
  onFavorite,
  onAddToList,
  onRemove,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        maxWidth: 700,
      }}
    >
      {/* Left Image */}
      <CardMedia
        component="img"
        sx={{ width: 120, borderRadius: 2, bgcolor: "#f0f0f0" }}
        image={imageUrl || "https://via.placeholder.com/120x180"}
        alt={title}
      />

      {/* Right Content */}
      <CardContent sx={{ flex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          {rating && (
            <Chip
              label={`${rating}%`}
              color={rating >= 70 ? "success" : "warning"}
              size="small"
            />
          )}
        </Stack>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {releaseDate}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <IconButton onClick={onRate}>
            <StarBorderIcon />
          </IconButton>
          <IconButton onClick={onFavorite} color="error">
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={onAddToList}>
            <PlaylistAddIcon />
          </IconButton>
          <IconButton onClick={onRemove}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Favorite;
