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
import { useNavigate } from "react-router-dom";
function Finish() {
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/summary");
  }
  return (
    <div>
      <Typography variant="h3" align="center" style={{fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px', background: '#f4f6f7'}}>
        Payment
      </Typography>
      <Typography variant="h6" align="center" py={2} style={{color: '#70A401', paddingTop: '36px'}}>
        Your order is ready and will be available in approximately <span style={{fontWeight: 'bold'}}> 10 minutes.</span>
      </Typography>
      <Typography variant="subtitle1" align="center" py={2} style={{fontWeight: 'bold'}}>
        How would you like to pay? 
      </Typography>
      <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/nz/icons/card_icons_2.png" alt="Credit Card Logos" style={{width: '110px', padding: '0px 16px'}} />
          <span>Credit Card Online</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/nz/icons/card_icons_2.png" alt="Credit Card Logos" style={{width: '110px', padding: '0px 16px'}} />
          <span>Credit Card Terminal</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/sg1/icons/gcash.jpg" alt="Credit Card Logos" style={{width: '110px', padding: '0px 16px'}} />
          <span>GCash via QR Scan</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static-ph1.s3.amazonaws.com/ph/icons/paymaya.jpeg" alt="Credit Card Logos" style={{width: '120px', padding: '0px 16px'}} />
          <span>PayMaya</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/my/logos/fpx.png" alt="Credit Card Logos" style={{width: '90px', padding: '0px 16px'}} />
          <span>Online Banking</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/my/logos/e-wallet-4.png" alt="Credit Card Logos" style={{width: '200px', padding: '0px 16px'}} />
          <span>E-Wallets</span>
        </li>
        <li style={{ padding: '12px 0px', border: '1px solid #70A401', margin: '12px', borderRadius: '8px', display: 'flex'}} onClick={handlePayment}>
          <img src="https://static.phdvasia.com/my/icons/1-shopeepay-rectangle-orange.png" alt="Credit Card Logos" style={{width: '150px', padding: '0px 16px'}} />
          <span>E-Wallet shopee</span>
        </li>
      </ul>
    </div>
  )
}

export default Finish