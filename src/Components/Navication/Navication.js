import React from 'react';
import CustomLink from '../CustomLink';

const Navication = () => {
    return (
        <div className='bg-blue-400 py-5 sticky top-0 left-0'>

            <nav className='md:flex items-center justify-center'>
                <CustomLink className = "text-xl mx-4" to='/'>Home</CustomLink>
                <CustomLink className = "text-xl mx-4" to='/book'>Book</CustomLink>
                <CustomLink className = "text-xl mx-4" to='/blogs'>Blogs</CustomLink>
                <CustomLink className = "text-xl mx-4" to='/about'>About Us</CustomLink>
                <CustomLink className = "text-xl mx-4" to='/contact'>Contact Us</CustomLink>
                <CustomLink className = "text-xl mx-4" to='/login'>Log In</CustomLink>
            </nav>
        </div>
    );
};

export default Navication;