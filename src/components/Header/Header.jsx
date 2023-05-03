import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto flex justify-between py-3'>
                <h4>SZ Recepi House</h4>
                <nav className='flex gap-5'>
                    <Link className='text-lg font-semibold' to='/'>Home</Link>
                    <Link className='text-lg font-semibold' to='/blog'>Blog</Link>
                </nav>
                {/* <h4>User Profile</h4> */}
                <div className='flex gap-4'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/register'><button>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;