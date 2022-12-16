import React from 'react';
import { options } from '../../data/dummy';
import Cards from './Cards';
const Menus = () => {
    return (
        <div className='menus col-sm-2'>
            {
                options.map((data)=> <Cards 
                key={data.id}
                id={data.id}
                image={data.image}
                number={data.number}
                Name={data.Name}
                />)
            }
        </div>
    );
};

export default Menus;