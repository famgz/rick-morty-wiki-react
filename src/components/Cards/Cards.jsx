import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';
import CardStatusBadge from './CardStatusBadge';

const Cards = ({ results }) => {
    if (!results) {
        return <>No characters found :( '</>;
    }

    return results.map((item) => {
        let { id, name, image, location, status } = item;

        return (
            <Link
                to={`/character/${id}`}
                key={id}
                className={`${styles['card-wrapper']} d-flex text-dark`}
            >
                <div className={`${styles.card} d-flex flex-column position-relative`}>
                    {/* Image */}
                    <img src={image} alt='' className='img-fluid' />

                    {/* Info */}
                    <div className='d-flex flex-column flex-grow-1 justify-content-between p-2'>
                        <div className='fs-4 fw-bold mb-2'>{name}</div>
                        <div className=''>
                            <div className='fs-6'>Last location</div>
                            <div className='fs-5 '>{location.name}</div>
                        </div>
                    </div>

                    <CardStatusBadge status={status}/>

                </div>
            </Link>
        );
    });
};

export default Cards;
