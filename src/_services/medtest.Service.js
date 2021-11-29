import { BehaviorSubject } from 'rxjs';

//import config from '../webpack.config';
import { fetchWrapper } from './../_helpers';

const userSubject = new BehaviorSubject(null);
//const baseUrl = `${config.apiUrl}/accounts`;
const baseUrl = 'http://carsverifyapi.azurewebsites.net/vehicle';

export const vehicleService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
        // .then(user => {
        //     // update stored user if the logged in user updated their own record
        //     if (user.id === userSubject.value.id) {
        //         // publish updated user to subscribers
        //         user = { ...userSubject.value, ...user };
        //         userSubject.next(user);
        //     }
        //     return user;
        // });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
        // .then(x => {
        //     // auto logout if the logged in user deleted their own record
        //     if (id === userSubject.value.id) {
        //         logout();
        //     }
        //     return x;
        // });
}