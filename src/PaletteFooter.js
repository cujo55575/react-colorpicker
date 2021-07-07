import React from "react";
import PaletteFooterStyles from "./styles/PaletteFooterStyles";
import { withStyles } from "@material-ui/styles";

function PaletteFooter(props) {
  const { classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {props.paletteName}
      <span className={classes.emoji}>{props.emoji}</span>
    </footer>
  );
}
export default withStyles(PaletteFooterStyles)(PaletteFooter);
