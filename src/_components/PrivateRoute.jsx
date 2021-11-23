// /* eslint-disable react/prop-types */
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// import { accountService, serviceOutletService } from '../_services';

// function PrivateRoute({ component: Component, roles, ...rest }) {
//     return (
//         <Route {...rest} render={props => {
//             const user = accountService.userValue;
//             const serviceUser = serviceOutletService.userValue;
//             if (!user) {
//                 // not logged in so redirect to login page with the return url
//                 return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
//             }else if (!serviceUser){
//                 return <Navigate to={{ pathname: '/serviceoutlet/login', state: {from: props.location}}} />
//             }

//             // check if route is restricted by role
//             if (roles && roles.indexOf(user.role || serviceUser.role) === -1) {
//                 // role not authorized so redirect to home page
//                 return <Navigate to={{ pathname: '/'}} />
//             }

//             // authorized so return component
//             return <Component {...props} />
//         }} />
//     );
// }

// export { PrivateRoute };