export interface UserLoginAction {
    type: 'USER_LOGIN';
    payload: {
        name: string;
        email: string;
    };
}

interface UserState {
    name: string,
    login: string
}

const initialState: UserState = {
    name: '',
    login: ''
}

const userReducer = (state: UserState = initialState, action: UserLoginAction) => {
    switch(action.type) {
        case 'USER_LOGIN':
        return {...state, name: action.payload.name, login: action.payload.email}
        default:
      return state;
    }
}

export default userReducer