import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack
} from '@material-ui/core';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 | Africanbiomedtests</title>
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
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          You can find your way back by clicking on the Home button
        </Typography>
        <Stack   justifyContent="center" alignItems="center" spacing={2} direction="row">
          <Button href="/" type="submit" sx={{ mt: 3, mb: 2 }} variant="contained" size="medium" color="success">HOME</Button>
        </Stack>
      </Container>
    </Box>
  </>
);

export default NotFound;
