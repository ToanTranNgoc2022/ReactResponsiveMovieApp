import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + 'movie' + '/' + item.Id;

    const bg = item.Poster;

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.Title}</h3>
        </Link>
    );
}

export default MovieCard;
