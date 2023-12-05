import React from 'react';
import FilterBtn from '../FilterBtn';
import typesArray from './types'

const Type = ({ setPageNumber, setType }) => { 
    
    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseType'
                    aria-expanded='false'
                    aria-controls='collapseType'
                >
                    Type
                </button>
            </h2>
            <div
                id='collapseType'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body d-flex justify-content-between flex-wrap px-2 py-3'>
                    {typesArray.map((item, index) => (
                        <FilterBtn
                            task={setType}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='type'
                            index={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Type;
