import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
    let [pageNumber, setPageNumber] = useState(1); // (1) is the default value
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');
    let [species, setSpecies] = useState('');
    let [gender, setGender] = useState('');
    let [type, setType] = useState('');
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData; // Destructure

    let apiUrl =
        'https://rickandmortyapi.com/api/character?' +
        `page=${pageNumber}` +
        `&name=${search}` +
        `&status=${status}` +
        `&species=${species}` +
        `&gender=${gender}` +
        `&type=${type}`;

    useEffect(() => {
        // IIFE -> Immediately Invoked Function Expression
        (async function () {
            let data = await fetch(apiUrl).then((res) => res.json());
            console.log(data)
            updateFetchedData(data);
        })();
    }, [apiUrl]);

    return (
        <div className='App'>
            <h1 className='text-center ubuntu my-5'>
                Rick & Morty <span className='text-primary'>Wiki</span>
            </h1>

            <Search setPageNumber={setPageNumber} setSearch={setSearch} />

            <div className='container'>
                {/* In bootstrap there are 12 columns inside a row */}
                <div className='row'>
                    {/* Filter tab */}
                    <Filters
                        setPageNumber={setPageNumber}
                        setStatus={setStatus}
                        setSpecies={setSpecies}
                        setGender={setGender}
                        setType={setType}
                    />

                    {/* Cards grid */}
                    <div className='col-8'>
                        <div className='row'>
                            <Cards results={results} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </div>
    );
}

export default App;
