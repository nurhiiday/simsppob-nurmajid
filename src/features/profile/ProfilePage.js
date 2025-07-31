import React from "react";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/16/solid";
import Navbar from "../../components/Navbar";


const ProfilePage = () => {

    return(
        <div>
            <Navbar/>
            <div className="max-w-xl mx-auto p-6 flex flex-col items-center text-center">
                <div className="relative">
                    <img src="/assets/ProfilePhoto.png" alt="avatar" className="rounded-full object-cover mb-3"/>
                    <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow">i</button>
                </div>
                <h2 className="text-xl font-semibold mt-4">Lorem Ipsum</h2>

                <form className="w-full space-y-4">
                    <div className="w-full text-left space-y-1">
                        <label className="text-sm">Email</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <AtSymbolIcon className="h-5 w-5" />
                            </span>
                            <input
                                name="email"
                                type="email"
                                placeholder="masukkan email anda"
                                value=""
                                onChange=""
                                className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div> 
                    </div>
                    <div className="w-full text-left space-y-1">
                        <label className="text-sm">Nama Depan</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <UserIcon className="h-5 w-5" />
                            </span>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="nama depan"
                                value=""
                                onChange=""
                                className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            />              
                        </div>
                    </div>
                    <div className="w-full text-left space-y-1">
                        <label className="text-sm">Nama Belakang</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <UserIcon className="h-5 w-5" />
                            </span>
                            <input
                                name="lastName"
                                type="text"
                                placeholder="nama belakang"
                                value=""
                                onChange=""
                                className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                        Simpan
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ProfilePage;