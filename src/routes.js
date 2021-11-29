import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Index from "./pages/Index/Index";
import Login from './pages/KYC/Login';
import Register from './pages/KYC/Register';
import HealthcareProviderLogin from './pages/HealthcareProviderKYC/Login';
import HealthcareProviderRegister from './pages/HealthcareProviderKYC/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';


const routes = [
  {
  path: 'app',
  element: <DashboardLayout />,
  children: [
    // { path: 'account', element: <Account /> },
    // { path: 'customers', element: <CustomerList /> },
    { path: 'dashboard', element: <Dashboard /> },
    // { path: 'products', element: <ProductList /> },
    // { path: 'settings', element: <Settings /> },
    // { path: 'vehiclemaintenance', element: <VehicleMaintence /> },
    // { path: 'vehicles', element: <VehicleList /> },
    // { path: 'vehicledocuments', element: <VehicleDocumentListResults /> },
    // { path: 'stolenvehicles', element: <UserReportStolenVehicles /> },
    // { path: 'vehicleinspection', element: <UserRequestVehicleInspection /> },
    // { path: 'serviceoutlets', element: <ServiceOutlets /> },
    // { path: 'staff', element: <AllStaff /> },
    // { path: 'users', element: <AllUsers /> },
    // { path: 'stolenvehiclereport', element: <AdminStolenVehicleReport /> },
    // { path: 'voucher', element: <Vouchers /> },
    // { path: 'adminvehiclemaintence', element: <AdminVehicleMaintenance /> },
    // { path: 'sovehicleinspection', element: <SOVehicleInspection /> },
    // { path: 'vehicleslist', element: <AdminVehicleList /> },
    { path: '*', element: <Navigate to="/404" /> }
  ]
  },
  {
    path: '/',
     //element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      // { path: 'accounts/forgotPassword', element: <ForgotPassword /> },
      // { path: 'accounts/resetPassword', element: <ResetPassword /> },
      // { path: 'accounts/verifyEmail', element: <VerifyEmail /> },
      { path: 'hcpLogin', element: <HealthcareProviderLogin /> },
      { path: 'hcpRegister', element: <HealthcareProviderRegister /> },
      // { path: 'ServiceOutlet/serviceOutletForgotPassword', element: <ServiceOutletForgotPassword /> },
      // { path: 'ServiceOutlet/serviceOutletResetPassword', element: <ServiceOutletResetPassword /> },
      // { path: 'ServiceOutlet/serviceOutletVerifyEmail', element: <ServiceOutletVerifyEmail /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Index/> },
      // { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];

export default routes;
