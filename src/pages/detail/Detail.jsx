import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss';

import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {

    let { category, id } = useParams();

    if (category === undefined){
        category = 'movie';
    }

    if (id === undefined){
        id = 'tt3896198';
    }

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            fetch('data.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
              .then(function(response){
                console.log(response)
                return response.json();
              })
              .then(function(myJson) {
                setItem(myJson.filter(function (i,n) {
                    return i['Id'] === id
                })[0])
              });
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${item.Poster})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${item.Poster})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.Title}
                                </h1>
                                <div className="genres">
                                    {
                                        item.Genre && item.Genre.split(',').map((genre, i) => (
                                            <span key={i} className="genres__item">{genre}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.Plot}</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
