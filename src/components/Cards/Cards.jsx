import React from 'react'
import styles from './Cards.module.scss'


const Cards = ({ results }) => {

    // Badge color
    let badgeColor = (status) => {
        switch (status) {
            case 'Alive':
                return 'bg-success'
            case 'Dead':
                return 'bg-danger'
            default:
                return 'bg-secondary'
        }
    }

    if (!results) {
        return (
            <>No characters found :('</>
        )
    }

    return (
        results.map(item => {
            let { id, name, image, location, status } = item
            return (
                <div key={id} className="d-flex col-4 mb-4 position-relative">
                    <div className={`${styles.cards} d-flex flex-column`}>
                        {/* Image */}
                        <img src={image} alt="" className="img-fluid" />
                        {/* Info */}
                        <div className="content p-2 d-flex flex-column flex-grow-1 justify-content-between">
                            <div className="fs-4 fw-bold mb-2">{name}</div>
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-5 ">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {/* Badge */}
                    <div className={`badge ${badgeColor(status)} position-absolute ${styles.badge}`}>
                        {status}
                    </div>
                </div>
            )
        })
    )
}

export default Cards
