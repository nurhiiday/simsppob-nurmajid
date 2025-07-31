import React from "react";
import { useDispatch } from "react-redux";
import { submitRegister } from "./registerSlice";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/16/solid";
import InputPassword from "../../components/InputPassword";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        const payload = {
            email: data.email,
            first_name: data.firstName,
            last_name: data.lastName,
            password: data.password,
        };

        dispatch(submitRegister(payload));
        
        reset();      
    }

    return (
        <div className="flex min-h-screen">
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
                <div className="flex items-center mb-6">
                    <img src="/assets/Logo.png" alt="Logo" className="w-5 h-5 mr-2" />
                    <h1 className="text-lg font-semibold text-gray-800">SIMS PPOB</h1>
                </div>

                <h2 className="text-2xl font-semibold text-center mb-6">Lengkapi data untuk<br />membuat akun</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
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
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

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
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}              
                    </div>

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
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>

                    <InputPassword register={register} error={errors.password} name="password" placeholder="buat password" />
                    <InputPassword register={register} error={errors.passwordVal} name="passwordVal" placeholder="konfirmasi password" />
                    
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                        Registrasi
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                sudah punya akun? <a href="#" className="text-red-600 font-semibold">login di sini</a>
                </p>
            </div>

            <div className="hidden md:flex md:w-1/2 bg-pink-100 items-center justify-center h-screen">
                <img src="/assets/IllustrasiLogin.png" alt="Illustration" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default RegisterForm;
