import React, { Suspense, useState } from "react";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useNavigate, useRoutes, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Checkbox,
  Typography,
} from "@mui/material";
import CheckBox from '@mui/icons-material/CheckBox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Checkout() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    phoneNumber: Yup.string().max(20, "Phone must not exceed 20 characters"),
  });
  const [searchParams] = useSearchParams();
  const store = searchParams.get("store");
  const table = searchParams.get("table");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    navigate("/payment");
  }

  return (
    <div>
      <Typography variant="h3" align="center" style={{fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px', background: '#f4f6f7'}}>
        Checkout
      </Typography>

      <Typography variant="h6" align="center" py={2}>
        You are ordering for <span style={{fontWeight: 'bold'}}>Store:</span> {store}, <span style={{fontWeight: 'bold'}}>Table:</span> {table}
      </Typography>

      <Grid container spacing={1} py={2} style={{padding: '10px'}}>
        <Grid item xs={8} sm={8}>
          <Typography variant="h6" align="left" margin="dense" style={{fontWeight: 'bold', paddingLeft: '8px'}}>
            (Large) BBQ Bacon & Mushroom 
          </Typography>
          <ul style={{listStyleType: 'none', paddingLeft: '8px', margin: '6px 0px'}}>
            <li style={{padding: '4px'}}>
              <span style={{padding: '5px 20px', color: '#78838c'}}>Think Crust</span>
            </li>
            <li style={{padding: '4px'}}>
              <span style={{padding: '5px 20px'}}>Plus Topping</span>
              <div style={{padding: '5px 30px', color: '#78838c'}}>Onions</div>
              <div style={{padding: '5px 30px', color: '#78838c'}}>Mushroom</div>
              <div style={{padding: '5px 30px', color: '#78838c'}}>Sausage</div>
            </li>
          </ul>
        </Grid>
        <Grid item xs={2} sm={2}>
        <span style={{border: '1px solid #78838c', padding: '5px 10px', fontSize: '14px'}}>x 1</span>

        </Grid>
        <Grid item xs={2} sm={2}>
          <Typography variant="subtitle1" align="center" margin="dense">
            $33.7
          </Typography>
        </Grid>
      </Grid>
      <div style={{padding: '10px', display: 'flex'}}>
        <div style={{paddingTop: '4px'}}><CheckBox sx={{ color: '#70A401' }}/></div>
        <Typography variant="subtitle1" align="left" py={2} style={{paddingTop: '0px', paddingLeft: '5px'}}>I agree to the Terms of Use and understand that my information will be used as described on this page and the Pizza Hut Privacy Policy . If I choose to pay with credit or debit card, my card information will be automatically stored and secured for future payments.</Typography>
      </div>
      <Box mt={3} align="center">
        <Button
          style={{width: '85%'}}
          variant="contained"
          color="success"
          onClick={handleClickOpen}
        >
          Confirm
        </Button>
      </Box>
      {/* dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are odering for table #1. "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to switch to another table?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Checkout;
