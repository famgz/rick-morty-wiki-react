import React from 'react'

const Pagination = ({ pageNumber, setPageNumber, pages }) => {

    let prev = () => {
        if(pageNumber === 1) return
        setPageNumber(x => x > 1 ? x - 1 : x)
    }

    let next = () => {
        if(pageNumber >= pages) return
        setPageNumber(x => x + 1)
    }

    return (
        <div className='container d-flex justify-content-center gap-5 my-5'>
            <button onClick={prev} className="btn btn-primary">Previous</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )
}

export default Pagination
