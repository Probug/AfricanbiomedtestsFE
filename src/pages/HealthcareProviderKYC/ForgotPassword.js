/* eslint-disable react/prop-types */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { serviceOutletService} from './../_services';
import {
    Box,
    Button,
    Grid,
    Container,
    Link,
    TextField,
    Typography
  } from '@material-ui/core';
  import {createTheme, ThemeProvider} from '@material-ui/core/styles';

  const theme = createTheme({
    palette: {
      teal: {
        main: '#13b4be',
        contrastText: '#fff',
      },
      fbBlue:{
        main: '#4267B2',
        contrastText: '#fff',
      },
      googleRed:{
        main: '#DB4437',
        contrastText: '#fff',
      },
    },
  });

function ForgotPassword() {
    const initialValues = {
        email: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    });

    function onSubmit(values, props) {
        toast();
        serviceOutletService.forgotPassword(values)
            .then(() => toast.success('Please check your email for password reset instructions'))
            .catch(error => toast.error(error))
            .finally(() => props.setSubmitting(false));
    }

    return (
        <>
        <Helmet>
          <title>Forgot Password | Carsverify</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}
        >
        <Container component="main" maxWidth="xs">
          <row className="">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
                <Form>
                <Box sx={{ mb: 3 }}>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                    >
                      Welcome 
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Enter your Email to retrieve password.
                    </Typography>
                  </Box>
                    <Field as={TextField}
                    fullWidth
                    onBlur={props.handleBlur}
                    helperText={props.touched.email ? props.errors.email : ""}
                    error={props.touched.email && Boolean(props.errors.email)}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                    <Box sx={{ py: 2 }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="teal"
                      disabled={props.isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >{props.isSubmitting ? "Loading" : "Submit"}
                    </Button>

                    </ThemeProvider>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                  ><Grid item
                      xs={12}
                      md={6}>
                    <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Back To Login
                    {' '}
                    <Link
                      component={RouterLink}
                      to="/serviceoutletlogin"
                    >
                      Cancel
                    </Link>
                  </Typography>
                  </Grid>
                  </Grid> 
                    <ToastContainer position="top-right"/>
                </Form>
            )}
        </Formik> 
        </row>
        </Container>
     </Box>
    </>       
    )
}

export default ForgotPassword; 