import React, { useEffect, useState } from "react";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/16/solid";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchProfileDetail, updateProfile } from "./profileSlice";


const ProfilePage = () => {
    const dispatch = useDispatch();
    const { profileDetail } = useSelector((state) => state.profile);
    const token = useSelector((state) => state.auth.user?.token)

    const {
        register,
        reset,
        setValue,
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
        }
    })

    useEffect(() => {
        if (!token) return;

        if (!profileDetail) {
            dispatch(fetchProfileDetail());
        }
    }, [token, dispatch]);

    useEffect(() => {
        if (profileDetail) {
            setValue("email", profileDetail.email);
            setValue("firstName", profileDetail.first_name);
            setValue("lastName", profileDetail.last_name);
        }
    }, [profileDetail, setValue])


    return(
        <div>
            <Navbar/>
            <div className="max-w-xl mx-auto p-6 flex flex-col items-center text-center">
                <div className="relative">
                    {profileDetail?(
                        <img src={profileDetail.profile_image} alt="avatar" className="rounded-full object-cover mb-3"/>
                    ) : (
                        <p>...</p>
                    )}
                    <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow">i</button>
                </div>
                <h2 className="text-xl font-semibold mt-4">{profileDetail?.first_name} {profileDetail?.last_name}</h2>
                
                {profileDetail? (
                    <form className="w-full space-y-4">
                        <div className="w-full text-left space-y-1">
                            <label className="text-sm">Email</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                    <AtSymbolIcon className="h-5 w-5" />
                                </span>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="masukkan email anda"
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
                                    {...register("firstName")}
                                    type="text"
                                    placeholder="nama depan"
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
                                    {...register("lastName")}
                                    type="text"
                                    placeholder="nama belakang"
                                    className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>
                        {/* {editMode?(
                            <div className="space-y-4">
                                <button type="submit" className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                                    Simpan
                                </button>
                                <button onClick={() => setEditMode(false)} type="button" className="w-full bg-white border-2 border-red-600 text-black py-2 rounded-md hover:bg-gray-200">
                                    Batal
                                </button>

                            </div>

                        ) : ( */}
                            <div className="space-y-4">
                                <button type="button" className="mt-4 w-full bg-white border-2 border-red-600 text-black py-2 rounded-md hover:bg-gray-200">
                                    Edit Profile
                                </button>
                                <button  className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                                    Logout
                                </button>
                            </div>
                        {/* )} */}
                        
                    </form>
                ) : (
                    <p>...</p>
                )}
                

            </div>
        </div>
    );
};

export default ProfilePage;