import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = ({ setPageNumber, setGender }) => {
    let genders = ['female', 'male', 'genderless', 'unknown'];

    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseGender'
                    aria-expanded='false'
                    aria-controls='collapseGender'
                >
                    Gender
                </button>
            </h2>
            <div
                id='collapseGender'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body d-flex justify-content-between flex-wrap px-2 py-3'>
                    {genders.map((item, index) => (
                        <FilterBtn
                            task={setGender}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='genders'
                            index={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gender;
