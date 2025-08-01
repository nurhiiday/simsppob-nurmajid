import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";
import { CreditCardIcon } from "@heroicons/react/16/solid";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "./paymentSlice";
import { useForm } from "react-hook-form";
import { submitPayment } from "./paymentSlice";

const PaymentPage = () => {
    const [searchParams] = useSearchParams();
    const serviceCode = searchParams.get('service');
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            service_code: "",
        }   
    })

    useEffect(() => {
        if (serviceCode) {
            dispatch(fetchService(serviceCode));
        }
    }, [serviceCode, dispatch])

    const service = useSelector(state => state.payment.service);

    useEffect(() => {
        if (service) {
            setValue("service_code", service.service_tariff);
        }
    }, [service, setValue])

    const onSubmit = async (data) => {
        const payload = {
            service_code: service.service_code,
        }
        dispatch(submitPayment(payload))
        reset();
    }

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                {service ? (
                    <div>
                        <div className="mx-auto">
                            <p className="text-sm mb-2">Pembayaran</p>
                            <div className="flex items-center gap-2 mb-4">
                                <img src={service.service_icon} alt="Logo" className="w-5 h-5 mr-2" />
                                <span className="font-semibold"> {service.service_name} </span>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                        <CreditCardIcon className="h-5 w-5" />
                                    </span>
                                    <input
                                        {...register("service_code")}
                                        type="number"
                                        disabled
                                        value={service.service_tariff}
                                        className="w-full pl-10 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />              
                                </div>
                                <button type="submit" className="w-full py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition">Bayar</button>
                            </form>
                            
                        </div>
                    </div>

                ) : (
                    <p>...</p>
                )}

                
            </div>
        </div>
    );
};

export default PaymentPage;