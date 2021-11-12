import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouteMatch } from 'react-router-dom';
import { Switch,Route } from 'react-router-dom';
import Dashboardhome from './Dashboardhome';
import Makeadmin from './Makeadmin';
import {Link} from 'react-router-dom'
import Addnewbike from './Addnewbike/Addnewbike';
import Manageallbike from './Manageallbike/Manageallbike';

import Logout from './Logout/Logout';
import Payment from './Payment/Payment';
import Myorder from './Myorder/Myorder';
import Review from './Review/Review';
import Manageproducts from '../Manageproduct/Manageproducts';






const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {/* for admin  */}
      <Link to='/adminpanel'><Button>go home page</Button></Link>
      <Link to={`${url}`}><Button>dashboard</Button></Link>

      
      <Link to={`${url}/makeadmin`}><Button>make admin</Button></Link>
      <Link to={`${url}/addnewbike`}><Button>add new bike</Button></Link>
      <Link to={`${url}/manageorder`}><Button>manage order</Button></Link>
      <Link to={`${url}/manageproducts`}><Button>manage products</Button></Link>
    
      <Link to={`${url}/logout`}><Button>logout</Button></Link>

      {/* for normal user  */}

      <Link to={`${url}/payment`}><Button>payment</Button></Link>
      <Link to={`${url}/myorder`}><Button>my order</Button></Link>
      <Link to={`${url}/review`}><Button>review</Button></Link>
      
      <List>
        {['payment', 'myorder', 'review', 'logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <Dashboardhome></Dashboardhome>
        </Route>

        {/* for admin  */}
        <Route path={`${path}/makeadmin`}>
          <Makeadmin></Makeadmin>
        </Route>
        <Route path={`${path}/addnewbike`}>
         <Addnewbike></Addnewbike>
        </Route>
        <Route path={`${path}/manageorder`}>
         <Manageallbike></Manageallbike>
        </Route>
        <Route path={`${path}/manageproducts`}>
         <Manageproducts></Manageproducts>
        </Route>
       
        
        <Route path={`${path}/logout`}>
          <Logout></Logout>
        </Route>

        {/* for normal user  */}

        <Route path={`${path}/payment`}>
         <Payment></Payment>
        </Route>
        <Route path={`${path}/myorder`}>
          <Myorder></Myorder>
        </Route>
        <Route path={`${path}/review`}>
         <Review></Review>
        </Route>

      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
