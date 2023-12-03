import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';

function App() {

  let [pageNumber, setPageNumber] = useState(41)  // (1) is the default value
  let [fetchData, updateFetchData] = useState([])
  let { info, results } = fetchData // Destructure
  let { count, pages, next, prev } = info

  let apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}`

  useEffect(() => {
    // IIFE -> Immediately Invoked Function Expression
    (async function () {
      let data = await fetch(apiUrl).then(res => res.json())
      updateFetchData(data)
    })()
  }, [apiUrl])


  return (
    <div className="App">

      <h1 className="text-center ubuntu my-5">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>

      {/* In bootstrap there are 12 columns inside a row */}
      <div className="container">
        <div className="row">

          {/* Filter tab */}
          <div className="col-3">
            <Filters />
          </div>

          {/* Cards grid */}
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>

        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} pages={pages}/>
    </div>
  );
}

export default App;
