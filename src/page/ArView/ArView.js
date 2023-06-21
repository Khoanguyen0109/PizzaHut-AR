import { ARCanvas, ARMarker } from "@artcom/react-three-arjs/lib/ar";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  MobileStepper,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { mockARPizza } from "constants/menu";
import { SIZE } from "constants/pizza";
import { useCart } from "context/CartContext";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const Model = ({ arImage, size }) => {
  const gltf = useLoader(GLTFLoader, arImage);
  const getSize = () => {
    switch (size) {
      case SIZE.S:
        return 50;
      case SIZE.M:
        return 100;
      case SIZE.L:
        return 150;
      default:
        break;
    }
  };
  return (
    <>
      <primitive object={gltf.scene} scale={getSize()} />
    </>
  );
};
function arrayCompare(_arr1, _arr2) {
  if (
    !Array.isArray(_arr1) ||
    !Array.isArray(_arr2) ||
    _arr1.length !== _arr2.length
  ) {
    return false;
  }

  // .concat() to not mutate arguments
  const arr1 = _arr1.concat().sort();
  const arr2 = _arr2.concat().sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
const STEP = ["SIZE", "CRUST", "TOPPING", "BACK"];
function ArView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState({});
  const [size, setSize] = useState("s");
  const [topping, setTopping] = useState(["onion"]);
  const [crust, setCrust] = useState("thin");
  const [arImage, setArImage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(true);
  const { addToCard } = useCart();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeCrust = (event) => {
    setCrust(event.target.value);
  };
  const handleChangeTopping = (event) => {
    const value = event.target.name;
    if (topping.includes(value)) {
      const reduceToping = topping.filter((item) => item !== value);
      setTopping(reduceToping);
    } else {
      setTopping((current) => [...current, value]);
    }
  };
  useEffect(() => {
    mockARPizza.find((item) => {
      if (
        item.size === size &&
        item.crust === crust &&
        arrayCompare(item.topping, topping)
      ) {
        return setArImage(item.ar_url);
      }
    });
  }, [size, topping, crust]);

  const onConfirm = () => {
    addToCard({
      pizzaName: "New Pizza",
      topping,
      size,
      crust,
    });
    navigate("/menu");
  };
  const onBack = () => {
    navigate("/menu");
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 10000);
  }, []);

  const renderSelect = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box display={"flex"} flexDirection="column" alignItems="center">
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ marginBottom: "8px" }}
            >
              The Big Decision! Choosing the Perfect Size to start the pizza
              making adventure!{" "}
            </Typography>
            <FormControl>
              <RadioGroup
                row={true}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={size}
                onChange={handleChangeSize}
              >
                <FormControlLabel value="s" control={<Radio />} label="Small" />
                <FormControlLabel
                  value="m"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel value="l" control={<Radio />} label="Large" />
              </RadioGroup>
            </FormControl>
          </Box>
        );
      case 1:
        return (
          <Box display={"flex"} flexDirection="column" alignItems="center">
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ marginBottom: "8px" }}
            >
              Crispy or Chewy? You Decide! Pick Your Crust and Create Pizza
              Magic!
            </Typography>
            <FormControl>
              <RadioGroup
                row={true}
                name="crust"
                value={crust}
                onChange={handleChangeCrust}
              >
                <FormControlLabel
                  value="thin"
                  control={<Radio />}
                  label="Thin"
                />
                <FormControlLabel
                  value="thick"
                  control={<Radio />}
                  label="Thick"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        );
      case 2:
        return (
          <Box display={"flex"} flexDirection="column" alignItems="center">
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ marginBottom: "8px" }}
            >
              Top It Your Way! Unleash your creativity, build your culinary
              masterpiece with a delightful array of toppings!!!
            </Typography>
            <FormGroup
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                checked={topping.includes("onion")}
                control={
                  <Checkbox onChange={handleChangeTopping} name="onion" />
                }
                label="Onion"
              />
              <FormControlLabel
                checked={topping.includes("mushroom")}
                control={
                  <Checkbox onChange={handleChangeTopping} name="mushroom" />
                }
                label="Mushroom"
              />
              <FormControlLabel
                checked={topping.includes("sausage")}
                control={
                  <Checkbox onChange={handleChangeTopping} name="sausage" />
                }
                label="Sausage"
              />
            </FormGroup>
          </Box>
        );
      case 3:
        return (
          <Box display={"flex"} flexDirection="column" alignItems="center">
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ marginBottom: "8px" }}
            >
              Yay!! Let's Confirm this to your order
            </Typography>
            <Button variant="contained" onClick={onConfirm}>
              Confirm
            </Button>
          </Box>
        );

      default:
        break;
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        "& canvas": {
          flex: 2,
          // height: "80vh !important",
        },
      }}
    >
      <Fab
        sx={{ position: "fixed", top: "84px", right: "24px" }}
        aria-label="add"
        size="small"
        onClick={onBack}
      >
        <CloseIcon />
      </Fab>
      <Snackbar
        sx={{ top: 100 }}
        open={open}
        message="Surprise Your Mate with a Customized Pizza! Move the camera to the QR to see the Pizza"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <ARCanvas
        camera={{ position: [0, 0, 0] }}
        dpr={window.devicePixelRatio}
        cameraParametersUrl="data/camera_para.dat"
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
        legacy={true}
      >
        <ambientLight />
        <pointLight position={[10, 10, 0]} />
        <ARMarker
          smooth={true}
          type={"pattern"}
          patternUrl={"data/marker.patt"}
        >
          {arImage && (
            <Suspense fallback={null}>
              <Model arImage={arImage} size={size} />
              {/* <OrbitControls /> */}
            </Suspense>
          )}

          {/* <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh> */}
        </ARMarker>
      </ARCanvas>
      <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            height: "15vh",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderSelect()}
        </Box>
        <MobileStepper
          variant="dots"
          steps={STEP.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flex: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === STEP.length - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default ArView;
