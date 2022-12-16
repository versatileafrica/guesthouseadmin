import React from 'react';

const Cards = ({id,image,number,Name}) => {
    return (
        <div key={id} className="card">
        <div className="content">
        <img src={image} alt="" />
        <p className='text-number'>{number}</p>
        <p className='text-string'>{Name}</p>
        </div>
        <div className="btn-section">
            <button className='text-white btn' style={{ backgroundColor: "#03C9D7", }} >Voir plus</button>
        </div>
    </div>
    );
};

export default Cards;


{/* <div className="flex justify-between items-center">
            <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
            </div>
            <button
                type="button"
                style={{ backgroundColor: "#03C9D7" }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
                <BsCurrencyDollar />
            </button>
        </div> */}