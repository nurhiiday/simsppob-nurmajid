import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuGrid = ({service}) => {
    const navigate = useNavigate();

    const handleClick = (service) => {
        navigate(`/payment?service=${service}`)
    }

    return(
        <div>
           <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-6">
                {service?.map((service) => (
                    <div 
                    key={service.service_code} 
                    onClick= {() => handleClick(service.service_code)}
                    className="flex flex-col items-center"
                    >
                        <div className="flex items-center">
                            <img src={service.service_icon} alt={service.service_name} className=""/>
                        </div>
                        <p className="text-sm mt-1 text-center">{service.service_name}</p>
                    </div>
                ))}
            </div> 
        </div>
    )

};

export default MenuGrid;