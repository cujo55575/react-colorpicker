import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles.js";

function ColorPickerForm(props) {
  const { paletteisFull, classes } = props;
  const [currentColor, setcurrentColor] = useState("teal");
  const [newColorName, setnewColorName] = useState("");
  function updateCurrentColor(newColor) {
    setcurrentColor(newColor.hex);
  }
  function handleColorChange(e) {
    setnewColorName(e.target.value);
  }
  function handleSubmit() {
    const newColor = {
      color: currentColor,
      name: newColorName,
    };
    props.addNewColor(newColor);
    setnewColorName("");
  }
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return props.colors.every(({ color }) => color !== currentColor);
    });
  });
  return (
    <div>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          placeholder="Color Name"
          className={classes.colorNameInput}
          value={newColorName}
          name="newColorName"
          margin="normal"
          variant="filled"
          onChange={handleColorChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name muse be unique",
            "Color already used",
          ]}
        />
        <Button
          className={classes.addColor}
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteisFull}
          style={{ backgroundColor: paletteisFull ? "grey" : currentColor }}
        >
          {paletteisFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}
export default withStyles(styles)(ColorPickerForm);
