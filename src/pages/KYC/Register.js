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
import { accountService } from './../../_services';

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

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

const Register = () => {
    const navigate = useNavigate();
    const initialValues = {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    }

    const validationSchema = Yup.object().shape({
     fullName: Yup.string().required("Required"),
     email: Yup.string().email("Enter valid email").required("Email is Required"),
     phoneNumber: Yup.string().min(11, "Enter valid Phone Number").required('Phone Number is required'),
     password: Yup.string().min(8, "Password should be atleast 8 characters").required("Password is required"),
     confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Confirm Password is required"),
     acceptTerms: Yup.boolean().oneOf([true], "Accept terms & conditions")
    })

   function handleSubmit(fields, props) {
    props.setStatus();
     accountService.register(fields)
         .then(() => {
             toast.success('Registration successful, please check your email for verification instructions');
             navigate("/login", { replace: true });
         })
         .catch(error => toast.error(error), props.resetForm())
         .finally(() => props.setSubmitting(false));
   }

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
               <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(props) => (
                  <Form>
                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field as={TextField}
                            autoComplete="full-name"
                            onBlur={props.handleBlur}
                            helperText={props.touched.fullName ? props.errors.fullName : ""}
                            error={props.touched.fullName && Boolean(props.errors.fullName)}
                            name="fullName"
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field as={TextField}
                            required
                            onBlur={props.handleBlur}
                            helperText={props.touched.email ? props.errors.email : ""}
                            error={props.touched.email && Boolean(props.errors.email)}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                          </Grid>
                          <Grid item xs={12}>
                          <Field as={TextField}
                            required
                            onBlur={props.handleBlur}
                            helperText={props.touched.phoneNumber ? props.errors.phoneNumber : ""}
                            error={props.touched.phoneNumber && Boolean(props.errors.phoneNumber)}
                            fullWidth
                            id="phoneNumber"
                            label="Phone Number"
                            name="phoneNumber"
                            autoComplete="phoneNumber"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field as={TextField}
                            onBlur={props.handleBlur}
                            helperText={props.touched.password ? props.errors.password : ""}
                            error={props.touched.password && Boolean(props.errors.password)}
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field as={TextField}
                            required
                            fullWidth
                            onBlur={props.handleBlur}
                            helperText={props.touched.confirmPassword ? props.errors.confirmPassword : ""}
                            error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
                            name="confirmpassword"
                            label="Confirm Password"
                            type="confirmPassword"
                            id="confirmPassword"
                            autoComplete="confirm-password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={<Field as={Checkbox} name="acceptTerms" color="primary" />}
                            label="I accept the terms and conditions."
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        color="success"
                        disabled={props.isSubmitting}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >{props.isSubmitting ? "Loading" : "SIGN UP"}
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link href="/login" variant="body2">
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                    <ToastContainer position="top-right"/>
                  </Form>
                )}
              </Formik>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default Register;




// import * as React from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import * as Yup from 'yup';
// import { Formik, Form, Field } from 'formik';
// import { accountService } from './../../_services';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Link,
//   TextField,
//   Typography
// } from '@material-ui/core';
// import {createTheme, ThemeProvider} from '@material-ui/core/styles';
// // import for division
// import {Col} from "reactstrap";
// import loginimage from "../../assets/images/logopage.jpg";

 
//   const theme = createTheme({
//     palette: {
//       teal: {
//         main: '#13b4be',
//         contrastText: '#fff',
//       },
//     },
//   });

// const Register = () => {
//   //const navigate = useNavigate();
//   const navigate = useNavigate();
//   // //const theme = useTheme();
//   const initialValues = {
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//     acceptTerms: false
// }

// const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required("Required"),
//     email: Yup.string().email("Enter valid email").required("Email is Required"),
//     phoneNumber: Yup.string().min(11, "Enter valid Phone Number").required('Phone Number is required'),
//     password: Yup.string().min(8, "Password should be atleast 8 characters").required("Password is required"),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Confirm Password is required"),
//     acceptTerms: Yup.boolean().oneOf([true], "Accept terms & conditions")
// })


//   function onSubmit(fields, props) {
//     props.setStatus();
//     accountService.register(fields)
//         .then(() => {
//             toast.success('Registration successful, please check your email for verification instructions');
//             navigate("/login", { replace: true });
//         })
//         .catch(error => toast.error(error), props.resetForm())
//         .finally(() => props.setSubmitting(false));
// }

//   return (
//     <>
//       <Helmet>
//         <title>Register | Carsverify</title>
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
//         <section className="section" id="register">
//         <Container>
//         <row className="">
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
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}>
//             {(props) => (
//               <Form>
//                 <Box sx={{ mb: 3 }}>
//                   <Typography
//                     color="textPrimary"
//                     variant="h2"
//                   >
//                     Create a new account
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     gutterBottom
//                     variant="body2"
//                   >
//                     Use your email to create a new account
//                   </Typography>
//                 </Box>
//                 <Field as={TextField}
//                   fullWidth
//                   onBlur={props.handleBlur}
//                     helperText={props.touched.fullName ? props.errors.fullName : ""}
//                     error={props.touched.fullName && Boolean(props.errors.fullName)}
//                   label="Full name"
//                   margin="normal"
//                   name="fullName"
//                   variant="outlined"
//                 />
//                 <Field as={TextField}
//                   fullWidth
//                   onBlur={props.handleBlur}
//                     helperText={props.touched.email ? props.errors.email : ""}
//                     error={props.touched.email && Boolean(props.errors.email)}
//                   label="Email Address"
//                   margin="normal"
//                   name="email"
//                   type="email"
//                   variant="outlined"
//                 />
//                   <Field as={TextField}
//                   fullWidth
//                   onBlur={props.handleBlur}
//                     helperText={props.touched.phoneNumber ? props.errors.phoneNumber : ""}
//                     error={props.touched.phoneNumber && Boolean(props.errors.phoneNumber)}
//                   label="Phone Number"
//                   margin="normal"
//                   name="phoneNumber"
//                   variant="outlined"
//                 />
//                 <Field as={TextField}
//                   fullWidth
//                   onBlur={props.handleBlur}
//                     helperText={props.touched.password ? props.errors.password : ""}
//                     error={props.touched.password && Boolean(props.errors.password)}
//                   label="Password"
//                   margin="normal"
//                   name="password"
//                   type="password"
//                   variant="outlined"
//                 />
//                   <Field as={TextField}
//                   fullWidth
//                   onBlur={props.handleBlur}
//                     helperText={props.touched.confirmPassword ? props.errors.confirmPassword : ""}
//                     error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
//                   label="Confirm Password"
//                   margin="normal"
//                   name="confirmPassword"
//                   type="password"
//                   variant="outlined"
//                 />
//                 <Box
//                   sx={{
//                     alignItems: 'center',
//                     display: 'flex',
//                     ml: -1
//                   }}
//                 >
//                   <Field as={Checkbox}
//                     name="acceptTerms"
//                     onBlur={props.handleBlur}
//                     helperText={props.touched.acceptTerms ? props.errors.acceptTerms : ""}
//                     error={props.touched.acceptTerms && Boolean(props.errors.acceptTerms)}
//                   />
//                   <Typography
//                     color="textSecondary"
//                     variant="body1"
//                   >
//                     I have read the
//                     {' '}
//                     <Link
//                       color="primary"
//                       component={RouterLink}
//                       to="#"
//                       underline="always"
//                       variant="h6"
//                     >
//                       Terms and Conditions
//                     </Link>
//                   </Typography>
//                 </Box>
//                 <Box sx={{ py: 2 }}>
//                   <ThemeProvider theme={theme}>
//                     <Button
//                       color="teal"
//                       disabled={props.isSubmitting}
//                       fullWidth
//                       size="large"
//                       type="submit"
//                       variant="contained"
//                     >{props.isSubmitting ? "Loading" : "Sign up"}
//                     </Button>
//                   </ThemeProvider>
//                 </Box>
//                 <Typography
//                   color="textSecondary"
//                   variant="body1"
//                 >
//                   Have an account?
//                   {' '}
//                   <Link
//                     component={RouterLink}
//                     to="/login"
//                     variant="h6"
//                   >
//                     Sign in
//                   </Link>
//                 </Typography>
//                 <ToastContainer position="top-right"/>
//               </Form>
//             )}
//           </Formik>
//           </Col>
//         </row>
//         </Container>
//         </section>
//       </Box>
//     </>
//   );
// };

// export default Register;
