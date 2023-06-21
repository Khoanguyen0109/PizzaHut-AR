import React from 'react'
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Checkbox,
  Typography,
} from "@mui/material";
import Timer from '@mui/icons-material/Timer';
function Summary() {
  return (
    <div>
      <Typography variant="h3" align="center" style={{fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px', background: '#f4f6f7'}}>
        Congratulations
      </Typography>

      <Typography variant="h6" align="center" py={2} style={{color: '#78838c'}}>
        You are currently number 2 in the waiting line.
      </Typography>
      <img src={require('../assets/banner.jpeg')} alt=" Banner" style={{width: '100%'}}></img>
      <div style={{padding: '10px 20px', display: 'flex'}}>
        <div style={{paddingTop: '4px'}}><Timer sx={{ color: '#70A401' }}/></div>
        <Typography variant="h6" align="center" style={{color: '#70A401'}}>
          Your order is ready and will be available in approximately <span style={{fontWeight: 'bold'}}> 10 minutes.</span>
        </Typography>
      </div>
      
      <Typography variant="subtitle1" align="center" py={2} px={4}>
        While waiting for your pizza, do you want to play some music?
      </Typography>
      <img src={require('../assets/image.png')} alt=" Music" style={{width: '100%', paddingLeft: '10px', paddingRight: '10px'}}></img>
      {/* <img src={require('../assets/playlist.png')} alt=" Music playlist" style={{width: '100%', paddingLeft: '10px', paddingRight: '10px'}}></img> */}

    </div>
  )
}

export default Summary