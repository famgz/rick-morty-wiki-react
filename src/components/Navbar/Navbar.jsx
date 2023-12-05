import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container'>
                    <h1 className='fs-3 ubuntu navbar-brand'>
                        Rick & Morty <span className='text-primary'>Wiki</span>
                    </h1>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-end'
                        id='navbarNavAltMarkup'
                    >
                        <div className='navbar-nav'>
                            <a className='nav-link active' aria-current='page' href='#'>
                                Characters
                            </a>
                            <a className='nav-link' href='#'>
                                Episode
                            </a>
                            <a className='nav-link' href='#'>
                                Location
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;