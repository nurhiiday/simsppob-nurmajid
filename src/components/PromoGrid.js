import React from "react";

const PromoGrid = () => {
    return(
       <div>
            <div className="mb-2 text-lg font-semibold">Temukan promo menarik</div>
            <div className="flex gap-4 overflow-x-auto">
                {[1, 2, 3, 4, 5].map((key) => (
                <div
                    key={key}
                    className="w-[270px] h-[121px] p-4 rounded-xl bg-no-repeat bg-cover shrink-0"
                    style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Banner${key}.png)`, // Bisa disesuaikan
                    }}
                ></div>
                ))}

            </div>
            
        </div> 
    );
}

export default PromoGrid;