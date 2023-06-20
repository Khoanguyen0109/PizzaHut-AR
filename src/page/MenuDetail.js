import React from 'react'
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Menu() {
  return (
    <Paper>
      <img src={require('../assets/pizza.jpeg')} alt="BBQ Bacon & Mushroom" style={{width: '100%'}}></img>
      <Button
        variant="contained"
        color="primary"
        style={{float: 'right'}}
        onClick={() => {}}
      >
        View AR menu
      </Button>
      <Typography variant="h6" align="left" margin="dense" px={2}>
        BBQ Bacon & Mushroom
      </Typography>
      <Typography variant="subtitle2" align="left" margin="dense" px={2}>
        With a drizzle of smoky BBQ sauce.
      </Typography>
      <Typography variant="subtitle2" align="left" margin="dense" px={2}>
        It’s the addictively smoky barbecue drizzle that will have you coming back for slice after slice of this mouth-watering combo of crisp bacon, sliced mushroom and red onion topped with mozzarella.
      </Typography>
      <Grid container spacing={1} py={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1" align="left" margin="dense" style={{background: '#f4f6f7', padding: '5px 10px'}}>
            Select your size and crust
          </Typography>
          <Typography variant="subtitle1" align="left" margin="dense" style={{fontWeight: 'bold', paddingLeft: '5px'}}>
            Large
          </Typography>
          <ul style={{listStyleType: 'none', paddingLeft: '20px', margin: '6px 0px'}}>
            <li style={{padding: '4px'}}>
              <span>Thin</span>
            </li>
            <li style={{padding: '4px'}}>
              <span>Think</span>
            </li>
          </ul>
          <Typography variant="subtitle1" align="left" margin="dense" style={{fontWeight: 'bold', paddingLeft: '5px'}}>
            Medium
          </Typography>
          <ul style={{listStyleType: 'none', paddingLeft: '20px', margin: '6px 0px'}}>
            <li style={{padding: '4px'}}>
              <span>Thin</span>
            </li>
            <li style={{padding: '4px'}}>
              <span>Think</span>
            </li>
          </ul>
          <Typography variant="subtitle1" align="left" margin="dense" style={{fontWeight: 'bold', paddingLeft: '5px'}}>
            Small
          </Typography>
          <ul style={{listStyleType: 'none', paddingLeft: '20px', margin: '6px 0px'}}>
            <li style={{padding: '4px'}}>
              <span>Thin</span>
            </li>
            <li style={{padding: '4px'}}>
              <span>Think</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Menu