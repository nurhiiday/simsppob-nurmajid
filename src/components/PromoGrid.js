import React from "react";

const PromoGrid = ({banner}) => {
    return(
       <div>
            <div className="mb-2 text-lg font-semibold">Temukan promo menarik</div>
            <div className="flex gap-4 overflow-x-auto">
                {banner?.map((banner, index) => (
                <div
                    key={index}
                    className="w-[270px] h-[121px] p-4 rounded-xl bg-no-repeat bg-cover shrink-0"
                    style={{
                    backgroundImage: `url(${banner.banner_image})`, // Bisa disesuaikan
                    }}
                ></div>
                ))}

            </div>
            
        </div> 
    );
}

export default PromoGrid;