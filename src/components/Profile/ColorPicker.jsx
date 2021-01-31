import React, { useState, useEffect, useMemo } from 'react';

import { Slider, Grid } from '@material-ui/core';

import * as Theme from '../../lib/themes';

const shades = [
  { label: '50', value: 0 },
  { label: '100', value: 1 },
  { label: '200', value: 2 },
  { label: '300', value: 3 },
  { label: '400', value: 4 },
  { label: '500', value: 5 },
  { label: '600', value: 6 },
  { label: '700', value: 7 },
  { label: '800', value: 8 },
  { label: '900', value: 9 },
  { label: 'A100', value: 10 },
  { label: 'A200', value: 11 },
  { label: 'A400', value: 12 },
  { label: 'A700', value: 13 }
];

const ColorPicker = ({ pickerName, pickerProps, onChange, defaultColor }) => {
  const [shade, setShade] = useState(5);
  const [color, setColor] = useState(defaultColor);
  const [colorsByShade, setColorsByShade] = useState([]);

  const getShade = index => shades.find(e => index === e.value).label;

  const changeShade = (event, newValue) => {
    setShade(newValue);
  };

  const changeColor = color => {
    setColor(color.hex);
    onChange(Theme.getTheme(color.hex, getShade(shade)));
  };

  useEffect(() => {
    setColorsByShade(Theme.getColors(getShade(shade)));
  }, [shade]);

  const Component = useMemo(() => {
    return React.lazy(() =>
      import(`react-color`).then(module => ({
        default: module[pickerName]
      }))
    );
  }, [pickerName]);

  return (
    <Grid container>
      <Grid item sm={9}>
        <Component
          {...pickerProps}
          color={color}
          colors={colorsByShade}
          onChange={changeColor}
        />
      </Grid>
      <Grid item sm={3}>
        <Slider
          min={0}
          max={13}
          marks={shades}
          onChange={changeShade}
          orientation="vertical"
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
  );
};

export default ColorPicker;
