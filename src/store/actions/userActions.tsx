interface UserPayload {
    name: string,
    email: string
}

export const UserData = (userData: UserPayload) => ({
    type: 'USER_LOGIN',
    payload: userData
})