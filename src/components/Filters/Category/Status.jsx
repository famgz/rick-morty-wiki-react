import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = ({ setPageNumber, setStatus }) => {
    let status = ['Alive', 'Dead', 'unknown'];

    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseStatus'
                    aria-expanded='true'
                    aria-controls='collapseStatus'
                >
                    Status
                </button>
            </h2>
            <div
                id='collapseStatus'
                className='accordion-collapse collapse show'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body d-flex justify-content-between flex-wrap px-2 py-3'>
                    {status.map((item, index) => (
                        <FilterBtn
                            task={setStatus}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='status'
                            index={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Status;
