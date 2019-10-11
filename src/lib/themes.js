import * as materialColors from '@material-ui/core/colors';

const getColors = shade => {
  var colors = [];
  for (const key in materialColors) {
    if (materialColors.hasOwnProperty(key)) {
      const element = materialColors[key];
      if (element[shade]) colors.push(element[shade]);
    }
  }
  return colors;
};

const getTheme = (colorHex, shade) => {
  for (const key in materialColors) {
    if (materialColors.hasOwnProperty(key)) {
      const element = materialColors[key];
      if (element[shade] === colorHex) return element[shade];
    }
  }
};

export { getTheme, getColors };
