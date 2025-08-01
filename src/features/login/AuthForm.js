import React from "react";
import { useDispatch } from "react-redux";
import { submitLogin } from "./authSlice";
import { AtSymbolIcon } from "@heroicons/react/16/solid";
import InputPassword from "../../components/InputPassword";
import { useForm } from "react-hook-form";
import { loginSchema } from "./authValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        const payload = {
            email: data.email,
            password: data.password,
        }

        const resultLogin = await dispatch(submitLogin(payload));
        if (resultLogin.meta.requestStatus === 'fulfilled') {
        navigate('/home');
        }
        reset();
    }

    return (
        <div className="flex min-h-screen">
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
                <div className="flex items-center mb-6">
                    <img src="/assets/Logo.png" alt="Logo" className="w-5 h-5 mr-2" />
                    <h1 className="text-lg font-semibold text-gray-800">SIMS PPOB</h1>
                </div>

                <h2 className="text-2xl font-semibold text-center mb-6">Masuk atau buat akun<br />untuk memulai</h2>

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

                    <InputPassword register={register} error={errors.password} name="password" placeholder="buat password" />

                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                        Masuk
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                belum punya akun? registrasi <Link to="/" className="text-red-600 font-semibold">di sini</Link>
                </p>
            </div>

            <div className="hidden md:flex md:w-1/2 bg-pink-100 items-center justify-center h-screen">
                <img src="/assets/IllustrasiLogin.png" alt="Illustration" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default AuthForm;
