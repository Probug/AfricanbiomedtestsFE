/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from '@material-ui/core';

import { accountService } from './../_services';



const VerifyEmail = () => {
    const EmailStatus = {
        Verifying: 'Verifying',
        Failed: 'Failed'
    }
    const navigate = useNavigate();
    const [emailStatus, setEmailStatus] = useState(EmailStatus.Verifying);

    useEffect(() => {
        const { token } = queryString.parse(location.search);

        // remove token from url to prevent http referer leakage
        //navigate.replace(location.pathname);

        accountService.verifyEmail(token)
            .then(() => {
                toast.success('Verification successful, you can now login.', { keepAfterRouteChange: true });
                //navigate.push('/login');
                navigate("/login", { replace: true });
            })
            .catch(() => {
                setEmailStatus(EmailStatus.Failed);
            });
    }, [EmailStatus.Failed, navigate]);

    function getBody() {
        // eslint-disable-next-line 
        switch (emailStatus) {
            case EmailStatus.Verifying:
                return <div>Verifying...</div>;
            case EmailStatus.Failed:
                return <div>Verification failed, you can also verify your account using the <Link component={RouterLink} to="/forgotPassword">forgot password</Link> page.</div>;
        }
    }

    return (
        <div>
            <h3 className="card-header">Verify Email</h3>
            <div className="card-body">{getBody()}</div>
            <ToastContainer position="top-right"/>
        </div>
    )
}

export default VerifyEmail; 