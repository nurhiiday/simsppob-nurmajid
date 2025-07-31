import React from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";
import { CreditCardIcon } from "@heroicons/react/16/solid";

const PaymentPage = () => {

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <div className="mx-auto">
                    <p className="text-sm mb-2">Pembayaran</p>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/assets/PBB.png" alt="Logo" className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Listrik Prabayar</span>
                    </div>
                </div>
                <div>
                    <form className="w-full space-y-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <CreditCardIcon className="h-5 w-5" />
                            </span>
                            <input
                                name="payment"
                                type="number"
                                placeholder="masukkan jumlah bayar"
                                value=""
                                onChange=""
                                className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            />              
                        </div>
                        <button className="w-full py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition">Bayar</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;