import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ onNavigate }) => (
  <Drawer variant="permanent" anchor="left">
    <List>
      {['Dashboard', 'My Reports', 'Profile', 'Logout'].map((text) => (
        <ListItem component="button" key={text} onClick={() => onNavigate(text)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar; 