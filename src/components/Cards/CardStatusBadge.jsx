import React from 'react';
import styles from './Cards.module.scss';

const badgeColor = (status) => {
    switch (status) {
        case 'Alive':
            return 'bg-success';
        case 'Dead':
            return 'bg-danger';
        default:
            return 'bg-secondary';
    }
};

const CardStatusBadge = ({ status }) => {
    return (
        <div
            className={`badge ${badgeColor(status)} ${
                styles.badge
            } position-absolute `}
        >
            {status}
        </div>
    );
};

export default CardStatusBadge;
