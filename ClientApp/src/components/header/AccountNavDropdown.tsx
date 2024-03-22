"use client"
import * as React from 'react';
import styled from 'styled-components';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
// `;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

interface IAccountNavDropdownProps {
}

const AccountNavDropdown: React.FunctionComponent<IAccountNavDropdownProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>


        <Button 
        id="nav-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
                color: 'white',
                fontSize: '.9em',
                fontWeight: 500,
                padding: '6px 0px',
                textTransform: 'none'
            }} 
        >Account</Button>
    <Menu 
        id='account-nav-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}  
    >
        <MenuItem onClick={handleClose}><ItemLink to='account'>My account</ItemLink></MenuItem>
        <MenuItem onClick={handleClose}><ItemLink to='account/settings'>Settings</ItemLink></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
                </div>
  );
};

export default AccountNavDropdown;
