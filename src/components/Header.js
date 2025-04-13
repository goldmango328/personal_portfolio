import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full z-50">
            {/* 로고 */}
            <div className="flex items-center">
                <img src="../logo192.png" alt="Logo" className="h-10 mr-2" height={"32px"}/>
                <Link to="/" class="text-xl no-underline">Myunggeum Jee</Link>
            </div>

            {/* 메뉴 */}
            <nav className="space-x-6 text-gray-800 font-semibold">
                <Link to="/showoff" className="hover:text-blue-500 transition">Showoff</Link>
                <Link to="/" className="hover:text-blue-500 transition">AboutMe</Link>
                <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
            </nav>
        </header>
    );
}

export default Header;