/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { serviceOutletService } from './../_services';
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

const ResetPassword = () => {
    const TokenStatus = {
        Validating: 'Validating',
        Valid: 'Valid',
        Invalid: 'Invalid'
    }
    const navigate = useNavigate();
    
    const [token, setToken] = useState(null);
    const [tokenStatus, setTokenStatus] = useState(TokenStatus.Validating);

    useEffect(() => {
        const { token } = queryString.parse(location.search);
        // remove token from url to prevent http referer leakage
        //navigate.replace(location.pathname);

        serviceOutletService.validateResetToken(token)
            .then(() => {
                setToken(token);
                setTokenStatus(TokenStatus.Valid);
            })
            .catch(() => {
                setTokenStatus(TokenStatus.Invalid);
            });
    }, [TokenStatus.Invalid, TokenStatus.Valid]);

    function getForm() {
        const initialValues = {
            password: '',
            confirmPassword: ''
        };

        const validationSchema = Yup.object().shape({
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        });

        function onSubmit(fields, props) {
            //toast.clear();
            serviceOutletService.resetPassword(token, fields)
                .then(() => {
                    toast.success('Password reset successful, you can now login.', { keepAfterRouteChange: true });
                    navigate("/login", { replace: true });
                })
                .catch(error => toast.error(error), props.resetForm())
                .finally(() => props.setSubmitting(false));
        }  
        
        return (
            <>
            <Helmet>
              <title>Reset Password | Carsverify</title>
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
                          Enter a new Password to reset Password.
                        </Typography>
                      </Box>
                        <Field as={TextField}
                        fullWidth
                        onBlur={props.handleBlur}
                        helperText={props.touched.password ? props.errors.password : ""}
                        error={props.touched.password && Boolean(props.errors.password)}
                        label="Password"
                        margin="normal"
                        name="password"
                        type="password"
                        variant="outlined"
                      />
                        <Field as={TextField}
                        fullWidth
                        onBlur={props.handleBlur}
                        helperText={props.touched.confirmPassword ? props.errors.confirmPassword : ""}
                        error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
                        label="Confirm Password"
                        margin="normal"
                        name="confirmPassword"
                        type="password"
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
                        >{props.isSubmitting ? "Loading" : "Reset Password"}
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

    function getBody() {
        switch (tokenStatus) {
            case TokenStatus.Valid:
                return getForm();
            case TokenStatus.Invalid:
                return <div>Token validation failed, if the token has expired you can get a new one at the <Link component={RouterLink} to="/serviceoutlet/serviceoutletforgotpassword">forgot password</Link> page.</div>;
            case TokenStatus.Validating:
                return <div>Validating token...</div>;
        }
    }

    return (
        <div>
            <h3 className="card-header">Reset Password</h3>
            <div className="card-body">{getBody()}</div>
        </div>
    )
}

export default ResetPassword; 