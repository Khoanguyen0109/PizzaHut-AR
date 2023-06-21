import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import image from "assets/pizza.jpeg";
import { Button, Rating } from "@mui/material";
export default function TCard(props) {
  const { onClick } = props;
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <br />
        <Rating sx={{marginLeft: '-4px'}} name="simple-controlled" value={5} />
        <Typography variant="subtitle2">Price: 139$</Typography>
      </CardContent>
    </Card>
  );
}
