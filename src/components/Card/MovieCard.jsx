import { Button, Card, CardMedia, Typography } from "@mui/material"



const MovieCard = ({img,title,catogry}) => {
    return(
        <Card sx={{
            width: 345,
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
        }}>
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h4">{catogry}</Typography>
      <Button>Watch alter</Button>
        </Card>
    )
}

export default MovieCard;