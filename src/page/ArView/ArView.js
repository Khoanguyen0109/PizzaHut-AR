import { ARCanvas, ARMarker } from "@artcom/react-three-arjs/lib/ar";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MobileStepper,
  Radio,
  RadioGroup,
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
function arraysEqual(a1, a2) {
  /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(a1) == JSON.stringify(a2);
}
const STEP = ["SIZE", "CRUST", "TOPPING"];
function ArView() {
  const theme = useTheme();
  const [size, setSize] = useState("s");
  const [topping, setTopping] = useState(["onion"]);
  const [crust, setCrust] = useState("thin");
  const [arImage, setArImage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  console.log("arImage", arImage);
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
    const value = event.target.name
    if(topping.includes(value)){
      const reduceToping = topping.filter(item => item !==value)
      setTopping(reduceToping)
    }else{
      setTopping(current=> [...current, value])
    }
  };
  useEffect(() => {
    mockARPizza.find((item) => {
      if (
        item.size === size &&
        item.crust === crust &&
        arraysEqual(item.topping, topping)
      ) {
        return setArImage(item.ar_url);
      }
    });
  }, [size, topping, crust]);

  const renderSelect = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box display={"flex"} flexDirection="column" alignItems="center">
            <Typography variant="h5" sx={{ marginBottom: "8px" }}>
              Choose the size you want
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
            <Typography variant="h5" sx={{ marginBottom: "8px" }}>
              Choose the crust you want
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
            <Typography variant="h5" sx={{ marginBottom: "8px" }}>
              Choose the topping you want
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
                control={<Checkbox onChange={handleChangeTopping} name="onion" />}
                label="Onion"
              />
              <FormControlLabel
                checked={topping.includes("mushroom")}
                control={<Checkbox onChange={handleChangeTopping}  name="mushroom"/>}
                label="Mushroom"
              />
              <FormControlLabel
                checked={topping.includes("sausage")}
                control={<Checkbox onChange={handleChangeTopping}  name="sausage" />}
                label="Sausage"
              />
            </FormGroup>
          </Box>
        );
      default:
        break;
    }
  };
  return (
    <Box
      sx={{
        "& canvas": {
          height: "80vh !important",
        },
      }}
    >
      <ARCanvas
        camera={{ position: [0, 0, 0] }}
        dpr={window.devicePixelRatio}
        cameraParametersUrl="data/camera_para.dat"
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 0]} />
        <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
          {arImage && (
            <Suspense fallback={null}>
              <Model arImage={arImage} size={size} />
              <OrbitControls />
            </Suspense>
          )}

          {/* <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh> */}
        </ARMarker>
      </ARCanvas>
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
        sx={{ maxWidth: 400, flexGrow: 1 }}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
  );
}

export default ArView;
