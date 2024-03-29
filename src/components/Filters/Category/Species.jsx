import React from 'react';
import FilterBtn from '../FilterBtn';

const Species = ({ setPageNumber, setSpecies }) => {
    let species = [
        'Human',
        'Alien',
        'Humanoid',
        'Poopybutthole',
        'Mythological',
        'Unknown',
        'Animal',
        'Disease',
        'Robot',
        'Cronenberg',
        'Planet',
    ];

    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseSpecies'
                    aria-expanded='false'
                    aria-controls='collapseSpecies'
                >
                    Species
                </button>
            </h2>
            <div
                id='collapseSpecies'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body d-flex justify-content-between flex-wrap px-2 py-3'>
                    {species.map((item, index) => (
                        <FilterBtn
                            task={setSpecies}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='species'
                            index={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Species;
