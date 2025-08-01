import React from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";
import { topupSchema } from "./topUpValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitTopUP } from "./topUpSlice";

const nominalOptions = [10000, 20000, 50000, 100000, 250000, 500000];

const TopUpPage = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        resolver: yupResolver(topupSchema),
    })

    const onSubmit = async (data) => {
        const payload = {
            top_up_amount: data.amount,
        }
        dispatch(submitTopUP(payload));
        reset();
    }

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <div className="mx-auto">
                    <p className="text-sm text-gray-600 mb-1">Silahkan masukkan</p>
                    <h2 className="text-2xl font-semibold mb-4">Nominal Top Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <input
                            {...register("amount")}
                            type="number"
                            placeholder="masukkan nominal Top Up"
                            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            />
                            <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                            {nominalOptions.map((a) => (
                                <button
                                type="button"
                                key={a}
                                onClick={() => setValue("amount", a)}
                                className="px-3 py-2 border rounded-md text-sm hover:bg-red-100"
                                >
                                {a}
                                </button>
                            ))}
                            </div>
                        </div>

                        <button
                            className="w-full py-2 bg-gray-300 text-white rounded-md text-sm hover:bg-red-500 hover:text-white transition"
                            type="submit"
                        >
                            Top Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TopUpPage;