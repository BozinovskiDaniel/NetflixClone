import React, {Component} from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: []
        };
    }

    getMovie() {
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

    componentDidMount() {
        this.getMovie();
    }

    render() {

        return ( <div className="moviepage">
        
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="posters" src={this.state.movie.poster_src} width="250px" alt="poster"  />
                    </div>
                    <div className="col-md-8">
                        <div className="movietitle">
                            <h1>{this.state.movie.title}</h1>
                        </div>
                        <div className="moviecontent">
                            <ul className="desc">
                                <li className="item">Budget: {this.state.movie.budget}</li>
                                <li className="item">Release-date: {this.state.movie.release_date}</li>
                                <li className="item">Runtime: {this.state.movie.runtime}</li>
                                <li className="item">Average-vote: {this.state.movie.vote_average}</li>
                                <li className="item">Total-votes: {this.state.movie.vote_count}</li>
                                <li className="item">Status: {this.state.movie.status}</li>
                                <li className="item">Revenue: {this.state.movie.revenue}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1>Overview</h1>
                    <p>{this.state.movie.overview}</p>
                    <input type="button" className="btn-sm btn-secondary bg-dark"  value="Movie Details" />
                    <Link to="/view">
                        <input type="button" className="btn-sm btn-secondary bg-dark"  value="Go Back" />
                    </Link>
                </div>

            </div>

        </div>
        );
    }
}

export default Movie;