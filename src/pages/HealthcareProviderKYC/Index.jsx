/* eslint-disable react/prop-types */
import React,{useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';

//import { serviceOutletService } from '../../_services/account.Service';

import { Login } from './Login';
import { Register } from './Register';
import { VerifyEmail } from './VerifyEmail';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { serviceOutletService } from '_services';


function serviceOutletKYC({ match }) {
    const { path } = match;

    useEffect(() => {
     // redirect to home if already logged in
        if (serviceOutletService.userValue) {
            history.push('/');
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Switch>
                            <Route path={`${path}/serviceoutletlogin`} component={Login} />
                            <Route path={`${path}/serviceoutletregister`} component={Register} />
                            <Route path={`${path}/serviceoutletverify-email`} component={VerifyEmail} />
                            <Route path={`${path}/serviceoutletforgot-password`} component={ForgotPassword} />
                            <Route path={`${path}/serviceoutletreset-password`} component={ResetPassword} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { serviceOutletKYC };