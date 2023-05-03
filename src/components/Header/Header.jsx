import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto flex justify-between py-3'>
                <h4>SZ Recepi House</h4>
                <nav className='flex gap-5'>
                    <ActiveLink className='text-lg font-semibold' to='/'>Home</ActiveLink>
                    <ActiveLink className='text-lg font-semibold' to='/blog'>Blog</ActiveLink>
                </nav>
                <div>
                    {
                        user ?
                            <span className='flex gap-6'>
                                <img className='w-9' style={{borderRadius: '50%'}} src={user.photoURL} alt="" />
                                <button onClick={handleLogOut}>Log Out</button>
                            </span> :
                            <Link to='/login'><button>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;