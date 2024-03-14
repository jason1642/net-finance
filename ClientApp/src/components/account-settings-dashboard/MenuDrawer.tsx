import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Key, Edit } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
interface IMenuDrawerProps {
}


interface MenuItemTypes {
  value: string;
  label: string;
  icon: React.ReactElement;
}

const OptionsArray: Array<MenuItemTypes> = [
  {
    value: 'edit-profile',
    label: 'Edit Profile',
    icon: <Edit />
  },
  {
    value: 'change-password',
    label: 'Change Password',
    icon: <Key />
  },
]


const MenuDrawer: React.FunctionComponent<IMenuDrawerProps> = (props) => {
  return (
    <Drawer
    sx={{
      width: drawerWidth,
    //   height: '100%',
      flexShrink: 0,
      position: 'relative !important',
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        position: 'relative !important',
        backgroundColor: '#32323e',
        color: 'white',
        // boxSizing: 'border-box',
      },
      '& .MuiListItemIcon-root' :{
        color: 'white'
      }
    }}
    variant="permanent"
    anchor="left"
    
  >
    <Toolbar />
    <Divider />
    <List>
      {OptionsArray.map((item, index) => (
                    <Link style={{textDecoration: 'none', color:'white', display: 'inline-block'}} to="edit-profile">

        <ListItem style={{display: 'flex'}} key={item.value} disablePadding>
          <ListItemButton style={{display: 'flex',}} >
            
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />

          </ListItemButton>
        </ListItem>
                    </Link>

      ))}
    </List>
    <Divider />
    <List>
      {['Place Holder', 'Place Holder', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <Key />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
  );
};

export default MenuDrawer;
