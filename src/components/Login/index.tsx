import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { UserData } from "../../store/actions/userActions";
import { useState } from "react";
import { User } from "../../models/users";

const userLoginSchema = z.object({
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de e-mail inválido'),
    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres')
})

type loginUserFormData = z.infer<typeof userLoginSchema>

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector(((state: User) => state.email))
    const [errorMessage, setErrorMessage] = useState<string>('');

    console.log('user', user)
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<loginUserFormData>({
        resolver: zodResolver(userLoginSchema)
    })

    const loginUser = (data: loginUserFormData) => {
        const newUser = { email: 'thiago', password: 'thiago@dotz.com' };

        const isValidUser = data.email === 'thiago.maia@dotz.com' && data.password === '123456'

        if (isValidUser) {
            dispatch(UserData(newUser));
        } else {
            setErrorMessage('Usuário ou Senha inválidos!');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center overflow-hidden">
            <div className="min-w-96 h-96 border rounded-md flex items-center justify-center">
                <div className="w-full p-6">
                    <h1 className="text-black text-center text-2xl font-bold">Login</h1>
                    <form onSubmit={handleSubmit(loginUser)} className="flex flex-col space-y-2">
                        <label className="text-black" htmlFor="name">Email</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            {...register('email')}
                            placeholder="Digite seu email"

                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                        <label className="text-black" htmlFor="email">Senha</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            {...register('password')}
                            placeholder="Digite a sua senha"

                        />
                        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}

                        <p className="text-blue-700 text-right m-3 font-medium text-sm hover:underline cursor-pointer">
                            Esqueceu sua senha?
                        </p>
                        <div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 text-center font-bold p-3 rounded-md hover:bg-blue-600 cursor-pointer w-full disabled:bg-gray-300 disabled:bg-opacity-50 disabled:cursor-not-allowed mt-3"
                                disabled={!isValid}
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                    {errors && errorMessage && <div className="text-red-600 text-sm text-center mt-3">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
}
