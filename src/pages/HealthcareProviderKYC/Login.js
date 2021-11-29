/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logolight from "../../assets/images/Africanlogo.png";
import * as Yup from 'yup';
import { Formik , Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { healthcareProviderService } from './../../_services';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://africanbiomedtests.com/">
        Africanbiomedtests
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    const navigate = useNavigate();
    // const data = new FormData(event.currentTarget);

     const initialValues = {
     email: '',
     password: ''
     };

      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string().required('Password is required')
  });

     function handleSubmit(values, props) {
       toast();
       navigate('/app/dashboard', { replace: true });
      //  healthcareProviderService.login(values)
      //      .then(() => {
      //        navigate('/app/dashboard', { replace: true });
      //      })
      //      .catch(error => toast.error(error))
      //      .finally(() => props.setSubmitting(false));
   }
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    //   


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img
              src={logolight}
              alt=""
              className="logo-light"
              height="40"
            />
          <Typography component="h1" variant="h5">
            Healthcare Provider Sign In
          </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
               onSubmit={handleSubmit}>
              {(props) => (
                 <Form>
                  <Box noValidate sx={{ mt: 1 }}>
                    <Field as={TextField}
                      onBlur={props.handleBlur}
                      helperText={props.touched.email ? props.errors.email : ""}
                      error={props.touched.email && Boolean(props.errors.email)}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      autoFocus
                    />
                    <Field as={TextField}
                      onBlur={props.handleBlur}
                      helperText={props.touched.password ? props.errors.password : ""}
                      error={props.touched.password && Boolean(props.errors.password)}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      disabled={props.isSubmitting}
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 3, mb: 2 }}
                    >{props.isSubmitting ? "Loading" : "Sign in"}
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link  
                          component={RouterLink}
                          to="/hcpforgotpassword" 
                          variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link                   
                          component={RouterLink}
                          to="/hcpRegister"  
                          variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
           <ToastContainer position="top-right"/>
        </Form>
      )}
    </Formik>
        
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;




// import * as React from 'react';
// //import { useState } from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import * as Yup from 'yup';
// import { Formik , Form, Field } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { serviceOutletService } from './../_services';
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Link,
//   TextField,
//   Typography
// } from '@material-ui/core';
// //import FacebookIcon from '../../icons/Facebook';
// //import GoogleIcon from '../../icons/Google';
// import {createTheme, ThemeProvider} from '@material-ui/core/styles';

// // import for login division
// import {Col} from "reactstrap";
// import loginimage from "../../assets/images/vectors/serviceoutletKYC.png";



//   const theme = createTheme({
//     palette: {
//       teal: {
//         main: '#13b4be',
//         contrastText: '#fff',
//       },
//       fbBlue:{
//         main: '#4267B2',
//         contrastText: '#fff',
//       },
//       googleRed:{
//         main: '#DB4437',
//         contrastText: '#fff',
//       },
//     },
//   });

// const Login = () => {
//   const navigate = useNavigate();

//   const initialValues = {
//     email: '',
//     password: ''
// };

//  const validationSchema = Yup.object().shape({
//        email: Yup.string().email('Must be a valid email').required('Email is required'),
//        password: Yup.string().required('Password is required')
//  });

//     function onSubmit(values, props) {
//       toast();
//       serviceOutletService.login(values)
//           .then(() => {
//             navigate('/app/dashboard', { replace: true });
//           })
//           .catch(error => toast.error(error))
//           .finally(() => props.setSubmitting(false));
//   }
//   return (
//     <>
//       <Helmet>
//         <title>Login | Carsverify</title>
//       </Helmet>
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//           justifyContent: 'center'
//         }}
//       >
//         {/* <Container maxWidth="sm"> */}
//         <Container>
//           <row className="">
//             <Col lg="6" className="mt-2 loginpage1">
//             <div>
//               <img
//                 src={loginimage}
//                 alt=""
//                 className="img-fluid mx-auto d-block"
//               />
//             </div>  
//             </Col>
//             <Col lg="5" className="mt-2 loginpage">
//               <Formik
//                initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={onSubmit}>
//               {(props) => (
//                 <Form>
//                   <Box sx={{ mb: 3 }}>
//                     <Typography
//                       color="textPrimary"
//                       variant="h2"
//                     >
//                       Service Station Login
//                     </Typography>
//                     </Box>
//                     <Box
//                     sx={{
//                       pb: 1  
//                     }}
//                   >
//                     <Typography
//                       color="textSecondary"
//                       gutterBottom
//                       variant="body2"
//                     >
//                       Enter your account details below to login.
//                     </Typography>
//                   </Box>
//                   <Field as={TextField}
//                     fullWidth
//                     onBlur={props.handleBlur}
//                     helperText={props.touched.email ? props.errors.email : ""}
//                     error={props.touched.email && Boolean(props.errors.email)}
//                     label="Email Address"
//                     margin="normal"
//                     name="email"
//                     type="email"
//                     variant="outlined"
//                   />
//                   <Field as={TextField}
//                     fullWidth
//                     onBlur={props.handleBlur}
//                     helperText={props.touched.password ? props.errors.password : ""}
//                     error={props.touched.password && Boolean(props.errors.password)}
//                     label="Password"
//                     margin="normal"
//                     name="password"
//                     type="password"
//                     variant="outlined"
                    
//                   />
//                   <Box sx={{ py: 2 }}>
//                   <ThemeProvider theme={theme}>
//                     <Button
//                       color="teal"
//                       disabled={props.isSubmitting}
//                       fullWidth
//                       size="large"
//                       type="submit"
//                       variant="contained"
//                     >{props.isSubmitting ? "Loading" : "Sign in"}
//                     </Button>
//                     </ThemeProvider>
//                   </Box> 
                 
//                   <Grid
//                     container
//                     spacing={3}
//                   >
//                     <Grid item
//                       xs={12}
//                       md={6}>
//                     <Typography
//                     color="textSecondary"
//                     variant="body1"
//                   > 
//                     Don&apos;t have an account?
//                     {' '}
//                     <Link
//                       component={RouterLink}
//                       to="/serviceoutletregister"
//                       variant="h6"
//                     >
//                       Sign up
//                     </Link>
//                     </Typography>
//                     </Grid>
//                     <Grid item
//                       xs={12}
//                       md={6}>
//                     <Link
//                       component={RouterLink}
//                       to="/serviceoutletforgotpassword"
//                       variant="h6"
//                     >
//                       Forgot Password
//                     </Link>
//                     </Grid>
//                   </Grid>

                  
//                   <ToastContainer position="top-right"/>
//                 </Form>
//               )}
//             </Formik>
//             </Col>
//           </row>
//         </Container>
//       </Box>
//     </>
//   )
// }

// export default Login;
