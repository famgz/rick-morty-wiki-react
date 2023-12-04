import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = ({ pageNumber, setPageNumber, pages }) => {

    let prev = () => {
        if(pageNumber === 1) return
        setPageNumber(x => x > 1 ? x - 1 : x)
    }

    let next = () => {
        if(pageNumber >= pages) return
        setPageNumber(x => x + 1)
    }

    let prevColor = () => {
        let style = pageNumber === 1 ? styles['btn-deactivate'] : 'btn-primary'
        return style

    }

    let nextColor = () => {
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
