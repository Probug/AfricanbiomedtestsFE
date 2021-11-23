/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Tooltip from '@material-ui/core/Tooltip';
import {
  Edit3 as EditIcon,
  Trash as TrashIcon
} from 'react-feather';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,  
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    teal: {
      main: '#13b4be',
      contrastText: '#fff',
    }
  }
});

// eslint-disable-next-line react/prop-types
const serviceOutletListResult = ({ props, customers, ...rest}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <React.Fragment>
    <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
     <ThemeProvider theme={theme}>
      <Button
        color="teal"
        variant="contained"
        onClick={handleClickOpen}
      >
        Add Service Outlet
      </Button>
      </ThemeProvider>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search Service Outlet"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
  <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Full Name
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                    
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                  <Tooltip title='Edit'>
                  <EditIcon onClick={handleClickOpen} size='20' hover></EditIcon>
                  </Tooltip>
                  <Tooltip title='Delete'>
                  <TrashIcon size='20'></TrashIcon>
                  </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
             <div>
             
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Service Outlet</DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                  <TextField
                   fullWidth
                   label="Full Name"
                   name="fullName"
                   type="text"
                   required
                   variant="outlined"
                 />
                 </Grid>
                 <Grid item xs={6}>
                 <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Service Outlet</MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={6}>
                  <TextField
                   fullWidth
                   margin="dense"
                   name="email"
                   label="Email"
                   type="email"
                   required
                   variant="outlined"
                 />
                 </Grid>
                 <Grid item xs={6}>
                  <TextField
                   
                   fullWidth
                   margin="dense"
                   name="password"
                   label="Password"
                   type="password"
                   required
                   variant="outlined"
                 />
                 </Grid>
                </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </div>
   </React.Fragment>
  );
};

serviceOutletListResult.propTypes = {
  customers: PropTypes.array.isRequired
};

export default serviceOutletListResult;
