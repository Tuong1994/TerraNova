import { domain } from '../../configs/setting';

export const userPaths = {
    signIn: `${domain}/api/authManagement/signIn`,
    signUp: `${domain}/api/authManagement/signUp`,
    getUserList: `${domain}/api/userManagement/getUserList`,
    getUserDetail: `${domain}/api/userManagement/getUserDetail`,
    createUser: `${domain}/api/userManagement/createUser`,
    updateUser: `${domain}/api/userManagement/updateUser`,
    removeUser: `${domain}/api/userManagement/removeUser`,
}