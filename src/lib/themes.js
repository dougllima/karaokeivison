import * as materialColors from "@material-ui/core/colors";

const test = materialColors;
console.log(test);
var colors = [];

for (const key in materialColors) {
  if (materialColors.hasOwnProperty(key)) {
    const element = materialColors[key];
    if (element[500]) colors.push(element[500]);
  }
}
export default colors;
