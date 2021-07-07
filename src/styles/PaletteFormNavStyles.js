import { up, down } from "./sizes";
import { DRAWER_WIDTH } from "../Constant.js";
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: "1rem",
  },
  button: {
    margin: "0 0.5rem",
    "& a": {
      textDecoration: "none",
    },
    [down("xs")]: {
      margin: "0.2rem",
      padding: "0.3rem",
    },
  },
});
export default styles;
