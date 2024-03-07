import { MagnifyingGlass, ShoppingCart} from '@phosphor-icons/react'
import { ChangeEvent, useEffect, useState } from 'react'
import api from '../../services/api'
import { User } from '../../models/users';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../Cart';
import { toggleCart } from '../../store/actions/cartActions';
import { Link } from "react-router-dom";
import { CartState } from '../../models/cartState';

export default function Header() {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const isCartOpen = useSelector((state: { cart: CartState }) => state.cart.isCartOpen);

    const totalItems = useSelector((state: { cart: CartState }) => state.cart.quantity);
  
    const user = useSelector(((state: {user: User}) => state.user))


    if(user) {
        console.log('user', user.email)
    }
    
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

    const handleCartIconClick = () => {
        dispatch(toggleCart());
    };

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
                        <Link to="/"><img src="//static.netshoes.com.br/2.89.9/netshoesbr/images/logo.png" alt="" /></Link>
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

                                <div>
                                    <div>
                                        <div>
                                            {user.email ? (
                                                <p className='text-white'>Bem-vindo, {user.email}</p>
                                            ) : (
                                                <button><Link to="/login"><span className='text-white'>Login</span></Link></button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div onClick={handleCartIconClick} className='cursor-pointer'>
                                    <ShoppingCart color="white" size={24} />
                                </div>
                                {isCartOpen && <Cart />}
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
                        <div key={user.id}>{user.email}</div>
                    ))
                ) : (
                    <div>{!loading && !error && ''}</div>
                )}
            </div>
        </>
    )
}
