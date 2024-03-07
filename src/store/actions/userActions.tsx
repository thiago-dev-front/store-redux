
import {User} from "../../models/users"

export const UserData = (userData: User) => ({
    type: 'USER_LOGIN',
    payload: userData
})