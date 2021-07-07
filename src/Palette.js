import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteStyles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

function Palette(props) {
  const { colors, paletteName, emoji, id } = props.palette;
  const { classes } = props;
  const [level, setlevel] = useState(500);
  const [format, setformat] = useState("hex");
  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
      />
    );
  });
  function changelevel(newLevel) {
    setlevel(newLevel);
  }
  function changeFormat(val) {
    setformat(val);
  }
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changelevel={changelevel}
        handleChange={changeFormat}
        showingAllColors={true}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}
export default withStyles(PaletteStyles)(Palette);
