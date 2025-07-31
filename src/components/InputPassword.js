import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from '../features/register/registerSlice'
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

const InputPassword = ({register, error, name, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <LockClosedIcon className="h-5 w-5" />
            </span>
            <input
                {...register(name)}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
                type="button"
                onMouseDown={() => setShowPassword(!showPassword)}
                onMouseUp={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
                {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
                ) : (
                <EyeIcon className="h-5 w-5" />
                )}
            </button>
        </div>


    );
};

export default InputPassword;

