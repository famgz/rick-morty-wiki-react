import React from 'react';
import Status from '../Filters/Category/Status';
import Species from '../Filters/Category/Species';
import Gender from '../Filters/Category/Gender';
import Type from '../Filters/Category/Type';

const Filters = ({ setPageNumber, setStatus, setSpecies, setGender, setType }) => {
    const clear = () => {
        setStatus('');
        setSpecies('');
        setGender('');
        setType('');
        window.location.reload(false); // no need change useStates if the page is being refreshed
    };

    return (
        <div className='col-3'>
            <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
            <div
                onClick={clear}
                style={{ cursor: 'pointer' }}
                className='text-center text-primary text-decoration-underline'
            >
                Clear Filters
            </div>

            <div className='accordion' id='accordionExample'>
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
                <Gender setPageNumber={setPageNumber} setGender={setGender} />
                <Type setPageNumber={setPageNumber} setType={setType} />
            </div>
        </div>
    );
};

export default Filters;
