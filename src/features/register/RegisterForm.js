import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm, submitRegister } from "./registerSlice";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/16/solid";
import InputPassword from "../../components/InputPassword";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.register);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    console.log(errors);

    const handleChange = (e) => {
        dispatch(updateField({field: e.target.name, value: e.target.value}));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            email: form.email,
            first_name: form.firstName,
            last_name: form.lastName,
            password: form.password
        };

        //check
        console.log(JSON.stringify(payload));

        dispatch(submitRegister(payload));
        
        dispatch(resetForm());       
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
                            name="email"
                            type="email"
                            placeholder="masukkan email anda"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <UserIcon className="h-5 w-5" />
                        </span>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="nama depan"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />              
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <UserIcon className="h-5 w-5" />
                        </span>
                        <input
                            name="lastName"
                            type="text"
                            placeholder="nama belakang"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <InputPassword name="password" placeholder="buat password" />
                    <InputPassword name="passwordVal" placeholder="konfirmasi password" />
                    
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
