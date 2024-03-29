import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import RamapiLogo from '../../assets/RamapiLogo';
import '../../App.css';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg ubuntu navbar-light bg-light mb-5'>
                <div className='container'>
                    <div className='d-flex align-items-center gap-2'>
                        <RamapiLogo fill='black' />
                        <Link to='/' className='fs-3 fw-bold navbar-brand m-0'>
                            Rick & Morty{' '}
                            <span className='text-primary'>Wiki</span>
                        </Link>
                    </div>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <style jsx='true'>
                            {`
                                button[aria-expanded='false'] > .closed {
                                    display: none;
                                }
                                button[aria-expanded='true'] > .open {
                                    display: none;
                                }
                            `}
                        </style>
                        <i className='fas fa-bars open fw-bold text-dark'></i>
                        <i className='fas fa-times closed fw-bold text-dark'></i>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-end'
                        id='navbarNavAltMarkup'
                    >
                        <div className='navbar-nav fs-5 align-items-end'>
                            <NavLink to='/' className='nav-link'>
                                Characters
                            </NavLink>
                            <NavLink to='/episodes' className='nav-link'>
                                Episodes
                            </NavLink>
                            <NavLink to='/locations' className='nav-link'>
                                Locations
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
