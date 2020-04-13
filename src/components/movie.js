import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function Movie() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = () => {
        const movieId = sessionStorage.getItem('movieId');
        const urlStr = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US";

        $.ajax({
            url: urlStr,
            success: (res) => {
                console.log("fetched data success");
                console.log(res);
                let movie = res;
                movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                this.setState({'movie': res});
                     
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }

    return ( <div className="moviepage">
    
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item active">

                    <div className="row thelogo">
                        <div className="btns">
                            <input type="button" className="btn-sm btn-secondary bg-dark"  value="Movie Details" />
                            <Link to="/view">
                                <input type="button" className="btn-sm btn-secondary bg-dark"  value="Go Back" />
                            </Link>
                        </div>
                        <Link to="/"><img src={require('../img/logo.png')} height="80px" alt="bg" /></Link>
                    </div>

                    <div className="row">
                        <div className="col-md-3 poster">
                            <img className="posters" src={movie.poster_src} width="100px" alt="poster"  />
                        </div>

                        <div className="col-md-9">
                            <div className="movietitle">
                                <h1>{movie.title}</h1>
                            </div>

                            <div className="moviecontent">
                                <ul className="desc">
                                    <li className="item"><h4>Budget:  </h4>${movie.budget}</li>
                                    <li className="item"><h4>Release-date:  </h4>{movie.release_date}</li>
                                    <li className="item"><h4>Runtime:  </h4>{movie.runtime} minutes</li>
                                    <li className="item"><h4>Average-vote:  </h4>{movie.vote_average}</li>
                                    <li className="item"><h4>Total-votes:  </h4>{movie.vote_count}</li>
                                    <li className="item"><h4>Status:  </h4>{movie.status}</li>
                                    <li className="item"><h4>Revenue:  </h4>${movie.revenue}</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    <div className="row">
                        <h1>Overview</h1>
                        <p>{movie.overview}</p>

                    </div>

            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        
    </div>
    );
}

export default Movie;