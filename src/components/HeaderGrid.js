import React from "react";
import { EyeIcon } from "@heroicons/react/16/solid";

const HeaderGrid = () => {
    return(
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
    );
};

export default HeaderGrid;