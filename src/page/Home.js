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
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Home() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    phoneNumber: Yup.string().max(20, "Phone must not exceed 20 characters"),
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const store = searchParams.get("store");
  const table = searchParams.get("table");
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    navigate("/menu");
  };

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{
          fontWeight: "bold",
          paddingTop: "20px",
          paddingBottom: "20px",
          background: "#f4f6f7",
        }}
      >
        Order Form
      </Typography>
      <Box px={2} py={3}>
        <Typography fontWeight="600" align="left" margin="dense">
          You are currently number 3 in the waiting line.
        </Typography>

        <Typography variant="h6" align="center" margin="dense">
          Store: {store}
        </Typography>
        <Typography variant="h6" align="center" margin="dense">
          Table: {table}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="name"
              name="name"
              label="FullName"
              fullWidth
              margin="dense"
              {...register("name")}
              error={errors.fullname ? true : false}
            />
            <Typography
              style={{ color: "red" }}
              variant="inherit"
              color="textSecondary"
            >
              {errors.name?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              margin="dense"
              {...register("phoneNumber")}
              error={errors.username ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.username?.message}
            </Typography>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
