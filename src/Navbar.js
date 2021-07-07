import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import NavBarStyles from "./styles/NavBarStyles";
import "rc-slider/assets/index.css";

function Navbar(props) {
  const [format, setformat] = useState("hex");
  const [open, setopen] = useState(false);
  const { classes } = props;
  function handleFormatChange(e) {
    setformat(e.target.value);
    setopen(true);
    props.handleChange(e.target.value);
  }
  function closeSnackBar() {
    setopen(false);
  }
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {props.showingAllColors && (
        <div>
          <span>Level: {props.level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={props.changelevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX- #ffffff </MenuItem>
          <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA- rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackBar}
        action={[
          <IconButton
            onClick={closeSnackBar}
            size="small"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      ></Snackbar>
    </header>
  );
}
export default withStyles(NavBarStyles)(Navbar);
