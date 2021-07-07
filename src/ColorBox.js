import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import ColorBoxStyles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";
function ColorBox(props) {
  const { name, background, moreUrl, showingFullPalette, classes } = props;
  const [copied, setcopied] = useState(false);
  function changeCopyState(props) {
    setcopied(true);
    const timer = () => {
      setTimeout(() => setcopied(false), 1500);
    };
    timer();
  }
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverLay} ${copied && classes.showOverLay}`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
export default withStyles(ColorBoxStyles)(ColorBox);
