import * as materialColors from "@material-ui/core/colors";

const getColors = () => {
  var colors = [];
  for (const key in materialColors) {
    if (materialColors.hasOwnProperty(key)) {
      const element = materialColors[key];
      if (element[500]) colors.push(element[500]);
    }
  }
  return colors;
};

const getTheme = colorHex => {
  for (const key in materialColors) {
    if (materialColors.hasOwnProperty(key)) {
      const element = materialColors[key];
      if (element[500] === colorHex) return element;
    }
  }
};

export { getTheme, getColors };
