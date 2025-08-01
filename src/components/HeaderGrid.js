import React, {useEffect} from "react";
import { EyeIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import {  fetchProfile,  fetchBalance } from "../features/home/homeSlice";

const HeaderGrid = () => {
    const dispatch = useDispatch();
    const { profile, balance} = useSelector((state) => state.home);
    const token = useSelector((state) => state.auth.user?.token)
   
    useEffect(() => {
        if (!token) return;

        if (!profile) {
            dispatch(fetchProfile());
        }

        if (!balance) {
            dispatch(fetchBalance());
        }
    }, [token,balance,profile, dispatch]);

    return(
        <div className=" justify-between flex mb-5">
                <div className="items-center">
                    <img src="/assets/ProfilePhoto.png" alt="avatar" className="rounded-full mb-3"/>
                    <div>
                        <p className="">Selamat datang,</p>
                        {profile ? (
                            <p className="text-xl font-semibold">{profile?.first_name} {profile?.last_name}</p>
                        ) : (
                            <p>...</p>
                        )}
                    </div>
                </div>
                <div 
                className="w-[670px] bg-no-repeat bg-cover bg-center text-white rounded-xl p-6 mb-6"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/BackgroundSaldo.png)` }} 
                >
                    <p>Saldo anda</p>
                    {balance ? (
                        <p className="text-2xl font-bold">Rp. {balance?.balance} </p>
                    ) : (
                        <p>...</p>
                    )}
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