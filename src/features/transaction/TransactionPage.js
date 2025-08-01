import React, {useEffect} from "react";
import Navbar from "../../components/Navbar";
import HeaderGrid from "../../components/HeaderGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "./transactionSlice";

const TransactionPage = () => {
    const dispatch = useDispatch();
    const { history } = useSelector((state) => state.history);
    const token = useSelector((state) => state.auth.user?.token)
    console.log(history)

    useEffect(() => {
        if (!token) return;

        if (!history) {
            dispatch(fetchHistory());
        }
    }, [token,history, dispatch]);

    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <div className="mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Semua Transaksi</h2>

                    {history?.records?.map((history) => (
                        <div className="space-y-3">
                            <div
                                key={history.invoice_number}
                                className="flex items-center justify-between bg-white border rounded-xl px-4 py-3 drop-shadow-sm"
                            >
                                <div>
                                    <p
                                        className="font-semibold text-sm"
                                    >
                                        Rp. {history.total_amount}
                                    </p>
                                    <p className="text-xs text-gray-500">{history.created_on}</p>
                                </div>
                                <p className="text-sm text-gray-600">{history.description}</p>
                            </div>
                        </div>

                    ))}

                    <div className="flex justify-center mt-6">
                        <button className="text-sm tex-red-500">Show More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransactionPage;