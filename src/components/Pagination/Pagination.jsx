import React from 'react'
// import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            forcePage={pageNumber===1 ? 0 : pageNumber-1}
            previousLabel="Prev"
            nextLabel="Next"
            previousLinkClassName="btn btn-primary"
            nextLinkClassName="btn btn-primary"
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            disabledLinkClassName='btn btn-secondary'
            onPageChange={(data) => { setPageNumber(data.selected + 1) }}
            pageCount={info?.pages}
        />
    )
}

export default Pagination


/*
//Without pagination module

const Pagination = ({ pageNumber, setPageNumber, pages }) => {

    const prev = () => {
        if (pageNumber === 1) return
        setPageNumber(x => x > 1 ? x - 1 : x)
    }

    const next = () => {
        if (pageNumber >= pages) return
        setPageNumber(x => x + 1)
    }

    const prevColor = () => {
        let style = pageNumber === 1 ? styles['btn-deactivate'] : 'btn-primary'
        return style

    }

    const nextColor = () => {
        let style = pageNumber >= pages ? styles['btn-deactivate'] : 'btn-primary'
        return style
    }

    return (
        <div className='container d-flex justify-content-center gap-5 my-5'>
            <button onClick={prev} className={`btn ${prevColor()}`}>Previous</button>
            <button onClick={next} className={`btn ${nextColor()}`}>Next</button>
        </div>
    )
}

export default Pagination
*/