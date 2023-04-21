import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SettingsIcon from '@mui/icons-material/Settings';
import { blue } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

const SidebarList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(8),
}));

const SidebarListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SidebarListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Sidebar = () => {
  const navigate=useNavigate()
  const location = useLocation();
  console.log(location.pathname)
  return (
    <SidebarDrawer variant="permanent" sx={{display:"block"}}>
      <SidebarList>

      <SidebarListItem
          button
          onClick={()=>navigate("/")}
        >
          <SidebarListItemIcon>
            <HomeIcon sx={{ color: blue[500] }} />
          </SidebarListItemIcon>
          <ListItemText primary="Home" />
        </SidebarListItem>

        <SidebarListItem
          button onClick={()=>navigate("/player")}
          selected={location.pathname === "/player"}
        >
          <SidebarListItemIcon>
            <VideoLibraryIcon sx={{ color: blue[500] }} />
          </SidebarListItemIcon>
          <ListItemText primary="Videos" />
        </SidebarListItem>

        <SidebarListItem
          button onClick={()=>navigate("/cards")}
          selected={location.pathname === "/cards"}
        >
          <SidebarListItemIcon>
            <CardMembershipIcon sx={{ color: blue[500] }} />
          </SidebarListItemIcon>
          <ListItemText primary="Cards" />
        </SidebarListItem>
        
        <SidebarListItem
          button
          disabled
        >
          <SidebarListItemIcon>
            <SettingsIcon sx={{ color: blue[500] }} />
          </SidebarListItemIcon>
          <ListItemText primary="Setting" />
        </SidebarListItem>



      </SidebarList>
    </SidebarDrawer>
  );
};

export default Sidebar;
