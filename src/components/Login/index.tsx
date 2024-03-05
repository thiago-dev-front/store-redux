export default function Login() {
    return (
        <>
            <div className="h-screen flex items-center justify-center overflow-hidden">
                <div className="min-w-96 h-96 border rounded-md flex items-center justify-center">
                 <div className="w-full p-6">
                 <div>
                        <h1 className="text-black text-center text-2xl font-bold">Login</h1>
                    </div>
                    <div>
                        <form className="flex flex-col space-y-2" >
                            <label className="text-black" htmlFor="name">Nome</label>
                            <input className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"type="text" id="name" placeholder="Digite seu nome de usuário"/>
                            <label className="text-black" htmlFor="email">E-mail</label>
                            <input className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"  type="email" id="email" placeholder="Digite a sua senha"/>
                        </form>
                    </div>
                    <p className="text-blue-700 text-right  m-3 font-medium text-sm hover:underline cursor-pointer">Esqueceu sua senha?</p>
                    <div className="bg-blue-700 text-center font-bold p-3 rounded-md hover:bg-blue-600 cursor-pointer">
                        <button className="text-white">Entrar</button>
                    </div>  
                 </div>
                </div>
            </div>
        </>
    )
}