import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cards.module.scss';
import CardStatusBadge from './CardStatusBadge';
import CardDetailsEpisodes from './CardDetailsEpisodes';

const CardDetails = () => {
    let { id } = useParams();
    let [data, updateData] = useState([]);
    let {
        name,
        status,
        species,
        type,
        gender,
        image,
        origin,
        location,
        episode,
    } = data;
    let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        // IIFE -> Immediately Invoked Function Expression
        (async function () {
            let data = await fetch(apiUrl).then((res) => res.json());
            console.log(data);
            updateData(data);
        })();
    }, [apiUrl]);

    return (
        <div className='container d-flex flex-column'>
            <div class='row gap-lg-5 align-content-center justify-content-center text-center'>
                <h1>
                    Name: <span className='text-primary'>{name}</span>
                </h1>
                {/* Title Character Name */}
                <div className='d-flex justify-content-center gap-5'>
                    {/* Basic Info */}
                    <div
                        className={`${styles['card-detail-info']} p-3 text-start`}
                    >
                        <p className='fs-5'>Species:</p>
                        <h3>
                            {species} {type ? `(${type})` : ''}
                        </h3>
                        <p className='fs-5'>Gender:</p>
                        <h3> {gender}</h3>
                        <p className='fs-5'>Origin: </p>
                        <h3>{origin?.name}</h3>
                        <p className='fs-5'>Last Location: </p>
                        <h3>{location?.name}</h3>

                        <CardDetailsEpisodes episode={episode} />
                    </div>
                    {/* Image */}
                    <div className=''>
                        <div
                            className='position-relative'
                            style={{ width: 'fit-content' }}
                        >
                            <img
                                src={image}
                                alt={`Character ${name}`}
                                className='rounded'
                            />
                            <CardStatusBadge status={status} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
