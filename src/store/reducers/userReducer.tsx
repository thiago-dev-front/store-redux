export interface UserLoginAction {
    type: 'USER_LOGIN';
    payload: {
        email: string;
        password: string;
    };
}

interface UserState {
    email: string,
    password: string
}

const initialState: UserState = {
    email: '',
    password: ''
}

const userReducer = (state: UserState = initialState, action: UserLoginAction) => {
    switch(action.type) {
        case 'USER_LOGIN':
        return {...state, email: action.payload.email, password: action.payload.password}
        default:
      return state;
    }
}

export default userReducer