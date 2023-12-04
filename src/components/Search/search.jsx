import React from 'react'
import styles from './Search.module.scss'

const Search = ({ setSearch }) => {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input
                onChange={e => {
                    setSearch(e.target.value)
                }}
                placeholder='Search for Characters'
                type="text"
                className={styles.input}

            />
            <button className="btn btn-primary fs-5">Search</button>
        </form>
    )
}

export default Search
