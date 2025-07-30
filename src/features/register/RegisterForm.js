import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "./registerSlice";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.register);

    const handleChange = (e) => {
        dispatch(updateField({field: e.target.name, value: e.target.value}));
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
                {/* Logo */}
                <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-red-600 rounded-sm mr-2"></div>
                <h1 className="text-lg font-semibold text-gray-800">SIMS PPOB</h1>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">Lengkapi data untuk<br />membuat akun</h2>

                {/* Form */}
                <form className="w-full max-w-sm space-y-4">
                <input
                    type="email"
                    placeholder="masukkan email anda"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="text"
                    placeholder="nama depan"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="text"
                    placeholder="nama belakang"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="password"
                    placeholder="buat password"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="password"
                    placeholder="konfirmasi password"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                    Registrasi
                </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                sudah punya akun? <a href="#" className="text-red-600 font-semibold">login di sini</a>
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:flex md:w-1/2 bg-pink-100 items-center justify-center h-screen">
                <img src="/assets/IllustrasiLogin.png" alt="Illustration" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default RegisterForm;
