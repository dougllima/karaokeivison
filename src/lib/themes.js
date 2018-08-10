import * as materialColors from "@material-ui/core/colors";

export const colors = materialColors.map(item => {
  return item[500];
});
