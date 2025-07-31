import React from "react";
import Navbar from "../../components/Navbar";
import MenuGrid from "../../components/MenuGrid";
import PromoGrid from "../../components/PromoGrid";
import HeaderGrid from "../../components/HeaderGrid";

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <div className="p-7 ml-3 mr-3">
                <HeaderGrid/>
                <MenuGrid/>
                <PromoGrid/>
                
            </div>
        </div>
    );
};

export default HomePage;