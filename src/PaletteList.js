import React from "react";
import MiniPalette from "./MiniPalette";
import PaletteListStyles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

function PaletteList(props) {
  function goToPalette(id) {
    props.history.push(`/palette/${id}`);
  }
  const { palettes, classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <MiniPalette
                {...palette}
                handleClick={() => goToPalette(palette.id)}
                handleDelete={props.deletePalette}
                key={palette.id}
                id={palette.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default withStyles(PaletteListStyles)(PaletteList);
