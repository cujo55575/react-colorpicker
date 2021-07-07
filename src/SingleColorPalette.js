import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import PaletteStyles from "./styles/PaletteStyles";
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette(props) {
  const { classes } = props;
  let _shades = gatherShades(props.palette, props.colorId);
  const [format, setformat] = useState("hex");
  const { paletteName, emoji } = props.palette;
  function gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  function changeFormat(val) {
    setformat(val);
  }
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${props.palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}
export default withStyles(PaletteStyles)(SingleColorPalette);
