import React, { useState, useEffect  } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import CommuteOutlinedIcon from '@material-ui/icons/CommuteOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  AlertTriangle as AlertTriangleIcon,
  FileText as FileTextIcon,
  User as UserIcon,
  Truck as TruckIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import { Role } from './../_helpers';
import { accountService, healthcareProviderService } from './../_services'

// const user = {
//   avatar: '/static/images/avatars/corporate-headshot.jpg',
//   // jobTitle: 'Real Estate Developer',
//   name: 'William Eze'
// };


const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/customers',
    icon: SecurityOutlinedIcon,
    title: '1 Click Auto Theft Protect'
  },
  {
    href: '/app/stolenvehicles',
    icon: AlertTriangleIcon,
    title: 'Report Stolen Vehicle'
  },
  {
    href: '/app/vehicles',
    icon: TruckIcon,
    title: 'Manage Vehicles'
  },
  {
    href: '/app/vehicledocuments',
    icon: FileTextIcon,
    title: 'Vehicles Document'
  },
  {
    href: '/app/vehiclemaintenance',
    icon: HistoryOutlinedIcon,
    title: 'Maintenace History'
  },
  {
    href: '/app/vehicleinspection',
    icon: SearchOutlinedIcon,
    title: 'Vehicle Inspection'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'My Profile'
  },
];
const adminItems = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/users',
    icon: UsersIcon,
    title: 'Users'
  },
  {
    href: '/app/staff',
    icon: SupervisedUserCircleOutlinedIcon,
    title: 'Staff'
  },
  {
    href: '/app/serviceoutlets',
    icon: BuildOutlinedIcon,
    title: 'Service Outlet'
  },
  {
    href: '/app/vehicleslist',
    icon: CommuteOutlinedIcon,
    title: 'AdminVehicles'
  },
  {
    href: '/app/vehicleinspection',
    icon: SearchOutlinedIcon,
    title: 'Vehicle Inspection Admin'
  },
  {
    href: '/app/voucher',
    icon: LoyaltyOutlinedIcon,
    title: 'Voucher'
  },
  {
    href: '/app/adminvehiclemaintence',
    icon: HistoryOutlinedIcon,
    title: 'Admin Vehicle Maintenance History'
  },
  {
    href: '/app/stolenvehiclereport',
    icon: AssignmentOutlinedIcon,
    title: 'Stolen Vehicle Report '
  }
];

const healthCareProviderItems = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },

  {
    href: '/app/sovehicleinspection',
    icon: AssessmentOutlinedIcon,
    title: 'Vehicle Inspection Report S.O'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'S.O Profile'
  }
];



const DashboardSidebar = ({ onMobileClose, openMobile }) => {

  
//   const [user, setUser] = useState({});
//   const [serviceOutlet, setServiceOutlet] = useState({});

//   useEffect(() => {
//     const subscription = accountService.user.subscribe(x => setUser(x));
//     return subscription.unsubscribe;
// }, []);

// useEffect(() => {
//   const subscription = healthcareProviderService.user.subscribe(x => setServiceOutlet(x));
//   return subscription.unsubscribe;
// }, []);





  const location = useLocation();


  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, // eslint-disable-next-line 
  [location.pathname]);

    //  if (user) 
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={'/static/images/avatars/corporate-headshot.jpg'}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {/* {user.fullname} */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {/* {user.email} */}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
        {/* user.role === Role.User && */}
        { 
          items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))
          }
          {/* { user.role === Role.Admin &&
            adminItems.map((adminItems) => (
            <NavItem
              href={adminItems.href}
              key={adminItems.title}
              title={adminItems.title}
              icon={adminItems.icon}
            />
          ))
          } */}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
          {/* {userContent} */}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={'/static/images/avatars/corporate-headshot.jpg'}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {/* {user.fullname} */}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {/* {user.email} */}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
        {/* user.role === Role.User && */}
        { 
          items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))
          }
          {/* { user.role === Role.Admin &&
            adminItems.map((adminItems) => (
            <NavItem
              href={adminItems.href}
              key={adminItems.title}
              title={adminItems.title}
              icon={adminItems.icon}
            />
          ))
          } */}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
          {/* {userContent} */}
        </Drawer>
      </Hidden>
    </>
  ); 
  // else if (serviceOutlet)
  // return (
  //   <>
  //     <Hidden lgUp>
  //       <Drawer
  //         anchor="left"
  //         onClose={onMobileClose}
  //         open={openMobile}
  //         variant="temporary"
  //         PaperProps={{
  //           sx: {
  //             width: 256
  //           }
  //         }}
  //       >
  //             <Box
  //     sx={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       height: '100%'
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         alignItems: 'center',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         p: 2
  //       }}
  //     >
  //       <Avatar
  //         component={RouterLink}
  //         src={'/static/images/avatars/corporate-headshot.jpg'}
  //         sx={{
  //           cursor: 'pointer',
  //           width: 64,
  //           height: 64
  //         }}
  //         to="/app/account"
  //       />
  //       <Typography
  //         color="textPrimary"
  //         variant="h5"
  //       >
  //         {serviceOutlet.fullname}
  //       </Typography>
  //       <Typography
  //         color="textSecondary"
  //         variant="body2"
  //       >
  //         {serviceOutlet.email}
  //       </Typography>
  //     </Box>
  //     <Divider />
  //     <Box sx={{ p: 2 }}>
  //       <List>
  //         { serviceOutlet.role === Role.ServiceOutlet &&
  //           healthCareProviderItems.map((healthCareProviderItems) => (
  //           <NavItem
  //             href={healthCareProviderItems.href}
  //             key={healthCareProviderItems.title}
  //             title={healthCareProviderItems.title}
  //             icon={healthCareProviderItems.icon}
  //           />
  //         ))
  //         }
  //       </List>
  //     </Box>
  //     <Box sx={{ flexGrow: 1 }} />
  //   </Box>
  //       </Drawer>
  //     </Hidden>
  //     <Hidden lgDown>
  //       <Drawer
  //         anchor="left"
  //         open
  //         variant="persistent"
  //         PaperProps={{
  //           sx: {
  //             width: 256,
  //             top: 64,
  //             height: 'calc(100% - 64px)'
  //           }
  //         }}
  //       >
  //              <Box
  //     sx={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       height: '100%'
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         alignItems: 'center',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         p: 2
  //       }}
  //     >
  //       <Avatar
  //         component={RouterLink}
  //         src={'/static/images/avatars/corporate-headshot.jpg'}
  //         sx={{
  //           cursor: 'pointer',
  //           width: 64,
  //           height: 64
  //         }}
  //         to="/app/account"
  //       />
  //       <Typography
  //         color="textPrimary"
  //         variant="h5"
  //       >
  //         {serviceOutlet.fullname}
  //       </Typography>
  //       <Typography
  //         color="textSecondary"
  //         variant="body2"
  //       >
  //         {serviceOutlet.email}
  //       </Typography>
  //     </Box>
  //     <Divider />
  //     <Box sx={{ p: 2 }}>
  //       <List>
  //         { serviceOutlet.role === Role.ServiceOutlet &&
  //           healthCareProviderItems.map((healthCareProviderItems) => (
  //           <NavItem
  //             href={healthCareProviderItems.href}
  //             key={healthCareProviderItems.title}
  //             title={healthCareProviderItems.title}
  //             icon={healthCareProviderItems.icon}
  //           />
  //         ))
  //         }
  //       </List>
  //     </Box>
  //     <Box sx={{ flexGrow: 1 }} />
  //   </Box>
       
  //         {/* {SOContent} */}
  //       </Drawer>
  //     </Hidden>
  //   </>
  // );
  // else return null
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
