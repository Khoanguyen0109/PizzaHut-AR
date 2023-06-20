import React, { Suspense, useState } from "react";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useRoutes, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const store = searchParams.get("store");
  const table = searchParams.get("table");
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      store: "",
      table: "",
      name: "",
      phoneNumber: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Paper>
      <Box px={3} py={2}>
        <Typography variant="h5" align="center" margin="dense">
          Order Form
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
            <Typography variant="inherit" color="textSecondary">
              {errors.name?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              margin="dense"
              {...register("phoe")}
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
            Register
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Home;
