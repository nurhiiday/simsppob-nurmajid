import React from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";

const nominalOptions = [10000, 20000, 50000, 100000, 250000, 500000];

const TopUpPage = () => {

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <div className="mx-auto">
                    <p className="text-sm text-gray-600 mb-1">Silahkan masukkan</p>
                    <h2 className="text-2xl font-semibold mb-4">Nominal Top Up</h2>

                    <div className="flex flex-col md:flex-row gap-2 mb-4">
                        <input
                        type="number"
                        placeholder="masukkan nominal Top Up"
                        value=""
                        onChange=""
                        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        />
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                        {nominalOptions.map((amount) => (
                            <button
                            key={amount}
                            onClick=""
                            className="px-3 py-2 border rounded-md text-sm hover:bg-red-100"
                            >
                            {amount}
                            </button>
                        ))}
                        </div>
                    </div>

                    <button
                        className="w-full py-2 bg-gray-300 text-white rounded-md text-sm hover:bg-red-500 hover:text-white transition"
                        onClick={() => alert(`Top up berhasil`)}
                    >
                        Top Up
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default TopUpPage;