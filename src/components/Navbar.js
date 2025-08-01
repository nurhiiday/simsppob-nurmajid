import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="shadow-md p-5">
            <div className="flex justify-between item-center mb-2">
                <Link to="/home" className="text-black hover:text-gray-400">
                <div className="flex items-center">
                    <img src="/assets/Logo.png" alt="Logo" className="w-6 h-6 mr-2" />
                    <h1 className="text-xl font-bold text-gray-800">SIMS PPOB</h1>
                </div>
                </Link>
                
                <div className="space-x-6">
                    <Link to="/topup" className="text-black hover:text-gray-400">Top Up</Link>
                    <Link to="/transaction" className="text-black hover:text-gray-400">Transaction</Link>
                    <Link to="/profile" className="text-black hover:text-gray-400">Akun</Link>
                </div>
                
            </div>
        </nav>
    );

};

export default Navbar;