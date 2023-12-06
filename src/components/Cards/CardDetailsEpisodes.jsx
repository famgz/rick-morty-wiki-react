import React from 'react';

const CardDetailsEpisodes = ({ episode }) => {
    if (!episode) {
        return;
    }

    let eps = episode.map((ep) => {
        return <p>Episode - {ep.split('/').pop()}</p>;
    });

    // return eps.join(', ');

    return (
        <div
            class='accordion mt-4'
            id='accordionExample'
            style={{
                'min-width': '300px',
            }}
        >
            <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                    <button
                        className='accordion-button collapsed fs-5'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                    >
                        Appears in Episodes:
                    </button>
                </h2>
                <div
                    id='collapseOne'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                >
                    <div
                        className='accordion-body'
                        style={{
                            'max-height': '300px',
                            'overflow': 'auto',
                        }}
                    >
                        {eps}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsEpisodes;
