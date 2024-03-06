interface UserPayload {
    email: string,
    password: string
}

export const UserData = (userData: UserPayload) => ({
    type: 'USER_LOGIN',
    payload: userData
})