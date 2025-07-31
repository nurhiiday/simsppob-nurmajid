import React from 'react';

const MenuGrid = () => {
    return(
        <div>
           <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-6">
                <div key='1' className="flex flex-col items-center">
                    <div className="flex items-center">
                        <img src="/assets/PBB.png" alt="avatar" className=""/>
                    </div>
                    <p className="text-sm mt-1 text-center">PBB</p>
                </div>
            </div> 
        </div>
    )

};

export default MenuGrid;