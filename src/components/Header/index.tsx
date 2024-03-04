import { MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react'
import { ChangeEvent, useEffect, useState } from 'react'
import api from '../../services/api'
import { User } from '../../models/users';
import { useSelector } from 'react-redux';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const totalItems = useSelector((state: { cart: { quantity: number } }) => state.cart.quantity);


    async function fetchUsers(term: string) {
        try {
            setLoading(true);
            const response = await api.get(`/users?q=${term}`);
            setSearchResults(response.data);
        } catch (error) {
            setError('Ocorreu um erro ao buscar os usuários.');
        } finally {
            setLoading(false);
        }
    }

    function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
        const term = e.target.value;
        setSearchTerm(term);
    }

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            fetchUsers(searchTerm);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    return (
        <>
            <section className="bg-purple-800">
                <div className="min-w-[930px] max-w-5xl mx-auto">
                    <div className="flex justify-between items-center h-20 pr-6 pl-6">
                        <div className="flex-shrink-0">
                            <img src="//static.netshoes.com.br/2.89.9/netshoesbr/images/logo.png" alt="" />
                        </div>
                        <div className='flex-1  relative m-8 max-w-lg'>
                            <form>
                                <input
                                    value={searchTerm}
                                    placeholder="Busque por um produto"
                                    type="text"
                                    onChange={handleTextChange}
                                    className="w-full h-10 px-4 rounded-full border border-gray-300  focus:outline-none" />
                            </form>
                            <MagnifyingGlass color='#13abe1' size={24} className='absolute top-0 right-0 mt-2 mr-3' />
                        </div>
                        <div>
                            <nav className='flex justify-center items-center space-x-6'>
                                <a href="" className='text-white font-medium'>Login</a>
                                <ShoppingCart color="white" size={24} />
                                <nav>
                                    {
                                        totalItems && totalItems > 0 ?
                                            <div className='text-white'>{totalItems}</div> : null
                                    }

                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                {loading && <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />}
                {error && <div>{error}</div>}
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((user) => (
                        <div key={user.id}>{user.username}</div>
                    ))
                ) : (
                    <div>{!loading && !error && ''}</div>
                )}
            </div>
        </>
    )
}
