import React from 'react';

const InputGroup = ({ total, prefix, setId }) => {
    return (
        <div className='input-group mb-3 filter-wrapper'>
            <select
                className='form-select'
                id={prefix}
                onChange={(e) => {
                    setId(e.target.value);
                }}
            >
                <option disabled selected>Choose...</option>

                {[...Array(total).keys()].map((x) => {
                    return (
                        <option className='' value={x + 1}>
                            {`${prefix} - ${x + 1}`}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default InputGroup;
