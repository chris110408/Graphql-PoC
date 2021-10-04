import React from 'react';

import { useAddUser} from '../operation/mutations/Add/addUser/addUser';
import AddUserForm from "../components/AddUserForm";

export default function () {
    const {mutate : registerUser} = useAddUser()
    return <AddUserForm registerUser={registerUser }/>


}