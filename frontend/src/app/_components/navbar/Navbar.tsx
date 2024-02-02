import React from 'react';
import '../../globals.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
            <ul className='navigation'>
                <li>
                    <Image
                    src="/../../../../public/logo.png"
                    alt=''
                    width={150}
                    height={150} />
                </li>
                <li><h1>Postbox Library</h1></li>
                <li><a><h2>Home</h2></a></li>
                <li><a><h2>Our Bookshelf</h2></a></li>
                <li><a><h2>Add A Book</h2></a></li>
                <li><a><h2>About</h2></a></li>
            </ul>
    );
};
// can't get the image to show up
// working on getting styling to work
export default Navbar;
