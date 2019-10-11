import React, { useContext, useState, useEffect } from 'react';
import { StyleContext } from '../contexts/StyleContext';

import {
  Grid,
  Button,
  Select,
  FormControl,
  InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import ColorPicker from './ColorPicker';
import LightBulb from './../layout/LightBulb';
import SaveIcon from '@material-ui/icons/Save';
import LightBulbOn from './../layout/LightBulbOn';

const pickers = [
  'BlockPicker',
  'CirclePicker',
  'CompactPicker',
  'GithubPicker',
  'TwitterPicker'
];

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing(1, 2)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing(1)} 0`
  },
  pickerContainer: {
    height: '100%'
  }
}));

const ThemePicker = props => {
  const classes = useStyles();

  const { theme, setTheme, saveTheme } = useContext(StyleContext);

  const [type, setType] = useState(theme.palette.type);
  const [picker, setPicker] = useState('TwitterPicker');
  const [primary, setPrimary] = useState(theme.palette.primary.main);
  const [secondary, setSecondary] = useState(theme.palette.secondary.main);

  useEffect(() => {
    setTheme(theme => ({
      ...theme,
      palette: {
        primary: { main: primary },
        secondary: { main: secondary },
        type: type,
        background: {
          default: type === 'light' ? '#fff' : '#333'
        }
      }
    }));
  }, [primary, secondary, type, setTheme]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-simple">Picker</InputLabel>
          <Select
            native
            value={picker}
            onChange={e => setPicker(e.target.value)}
          >
            {pickers.map(e => (
              <option key={`picker-${e}`} value={e}>
                {e.replace('Picker', '')}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ColorPicker
              pickerName={picker}
              onChange={setPrimary}
              defaultColor={primary}
              pickerProps={{
                triangle: 'hide',
                width: '100%'
              }}
            />
          </React.Suspense>
        </Grid>
        <Grid item xs={12} sm={6}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ColorPicker
              pickerName={picker}
              onChange={setSecondary}
              defaultColor={secondary}
              pickerProps={{
                triangle: 'hide',
                width: '100%'
              }}
            />
          </React.Suspense>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={type}
            exclusive
            color="primary"
            onChange={setType}
          >
            <ToggleButton value="dark">
              <LightBulb type={type} />
            </ToggleButton>
            <ToggleButton value="light">
              <LightBulbOn type={type} />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => saveTheme(theme)}
        >
          <SaveIcon />
          Salvar Mudanças
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThemePicker;
