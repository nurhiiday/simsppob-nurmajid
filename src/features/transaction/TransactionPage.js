import React from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";

const TransactionPage = () => {

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <div className="mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Semua Transaksi</h2>

                    <div className="space-y-3">
                        <div
                            key="1"
                            className="flex items-center justify-between bg-white border rounded-xl px-4 py-3 drop-shadow-sm"
                        >
                            <div>
                                <p
                                    className="font-semibold text-sm"
                                >
                                    Rp. 10.000
                                </p>
                                <p className="text-xs text-gray-500">11 11 1111</p>
                            </div>
                            <p className="text-sm text-gray-600">type</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="text-sm tex-red-500">Show More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransactionPage;