const PaletteListStyles = {
  root: {
    background:
      "radial-gradient(50% 30% ellipse at center top, #201e40 0%, rgba(0,0,0,0) 100%),radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%)",
    height: "100vh",
    overflow: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};
export default PaletteListStyles;
