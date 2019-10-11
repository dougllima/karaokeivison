import React from 'react';

import User from './User';
import ThemePicker from './ThemePicker';

import { UserContext } from '../contexts/UserContext';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

const ProfilePage = props => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <UserContext.Consumer>
      {value => {
        const { user } = value;
        return (
          <React.Fragment>
            <ExpansionPanel
              square
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Perfil</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <User user={user} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <ExpansionPanelSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Tema</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ThemePicker />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </React.Fragment>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ProfilePage;
