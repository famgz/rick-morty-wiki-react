import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

// TODO: refactor to fetch api/episode once and build make changes from it

const Episodes = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]); // must match App.jsx results variable name ??
    let { air_date, name } = info;
    let apiUrl = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(apiUrl).then((res) => res.json());
            setInfo(data);
            let characters = await Promise.all(
                data.characters.map((character) => {
                    return fetch(character).then((res) => res.json());
                })
            );
            setResults(characters);
        })();
    }, [apiUrl]);

    return (
        <div className='container_'>
            <h1 className='text-center'>
                {'Episode: '}
                <span className='text-primary'>{name ? name : 'Unknown'}</span>
            </h1>
            <h5 className='text-center'>
                Air Date: {air_date ? air_date : 'Unknown'}
            </h5>
            <div className='content'>
                <div className='filter-wrapper'>
                    <h4 className='text-center mb-4'>Pick Episodes</h4>
                    <InputGroup prefix='Episode' total={51} setId={setId} />
                </div>
                {/* Cards grid */}
                <div className='cards-wrapper'>
                    <Cards results={results} />
                </div>
            </div>
        </div>
    );
};

export default Episodes;
