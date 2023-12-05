import React from 'react';

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
    let id = `${name}-${index}`;

    return (
        <div>
            <style jsx='true'>
                {`
                    .x:checked + label {
                        background-color: #0b5ed7;
                        color: white;
                    }
                    input[type='radio'] {
                        display: none;
                    }
                `}
            </style>
            <div className='form-check p-0'>
                <input
                    onClick={() => {
                        setPageNumber(1);
                        task(item);
                    }}
                    className='form-check-input x'
                    type='radio'
                    name={name}
                    id={id}
                />
                <label className='btn btn-outline-primary' htmlFor={ id }>
                    {item}
                </label>
            </div>
        </div>
    );
};

export default FilterBtn;
