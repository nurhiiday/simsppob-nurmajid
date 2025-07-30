import React from "react";
import Navbar from "../../components/Navbar";
import { EyeIcon } from "@heroicons/react/16/solid";

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <div className=" justify-between flex mb-5">
       
                    <div className="items-center">
                        <img src="/assets/ProfilePhoto.png" alt="avatar" className="rounded-full mb-3"/>
                        <div>
                            <p className="">Selamat datang,</p>
                            <p className="text-xl font-semibold">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div 
                    className="w-[670px] bg-no-repeat bg-cover bg-center text-white rounded-xl p-6 mb-6"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/BackgroundSaldo.png)` }} 
                    >
                        <p>Saldo anda</p>
                        <p className="text-2xl font-bold">Rp. ******* </p>
                        <button className="mt-2 text-sm">
                            <div className="flex">
                                <p className="mr-1">Lihat Saldo</p>
                                <EyeIcon className="h-5 w-5" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-6">
                    <div key='1' className="flex flex-col items-center">
                        <div className="flex items-center">
                            <img src="/assets/PBB.png" alt="avatar" className=""/>
                        </div>
                        <p className="text-sm mt-1 text-center">PBB</p>
                    </div>
                </div>
                
                <div>
                    <div className="mb-2 text-lg font-semibold">Temukan promo menarik</div>
                    <div className="flex gap-4 overflow-x-auto">
                        {[1, 2, 3, 4, 5].map((key) => (
                        <div
                            key={key}
                            className="w-[270px] h-[121px] p-4 rounded-xl bg-no-repeat bg-cover shrink-0"
                            style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Banner${key}.png)`, // Bisa disesuaikan
                            }}
                        ></div>
                        ))}

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HomePage;