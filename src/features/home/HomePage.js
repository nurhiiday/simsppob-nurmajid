import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MenuGrid from "../../components/MenuGrid";
import PromoGrid from "../../components/PromoGrid";
import HeaderGrid from "../../components/HeaderGrid";
import { useDispatch, useSelector } from "react-redux";
import {  fetchBanner,  fetchService } from "./homeSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const { banner, service, error } = useSelector((state) => state.home);
    const token = useSelector((state) => state.auth.user?.token)

    useEffect(() => {
        if (!token) return;

        if (!banner) {
            dispatch(fetchBanner());
        }

        if (!service) {
            dispatch(fetchService());
        }
    }, [token, dispatch]);


    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>

                {service ? (
                <MenuGrid service={service}/>
                ) : (
                  <p>...</p>  
                )}

                {banner ? (
                <PromoGrid banner={banner}/>  
                ) : (
                  <p>...</p>  
                )}
  
            </div>
        </div>
    );
};

export default HomePage;