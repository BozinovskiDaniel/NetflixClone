import React, {Component, useEffect, useRef} from 'react';
import MovieRow from '../js/MovieRow';
import $ from 'jquery';
import {TweenMax, Linear} from 'gsap';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.performSearch("it");
    }

    performSearch(searchTerm) {

        const urlStr = "https://api.themoviedb.org/3/search/multi?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&query=" + searchTerm;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                
                var movieRows = [];

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                    const movieRow = <MovieRow key={movie.id} movie={movie} />
                    movieRows.push(movieRow);
                })
                
                this.setState({rows: movieRows});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }

    searchChangeHandler(event) {
        console.log(event.target.value);
        const searchTerm = event.target.value;
        this.performSearch(searchTerm);
    }


    render() {
        return (
            <div>
                
                <div className="sidenav">
                    <div className="grid-item" />
                    <div className="grid-item">
                        <h1>Getflix Charts</h1>
                        <a href="#">Most Popular Movies</a>
                        <a href="#">Top Rated Movies</a>
                        <a href="#">Most Popular TV</a>
                        <a href="#">Top Rated TV</a>
                    </div>
                    <div className="grid-item">
                        <h1>Top Rated TV Shows by Genre</h1>
                        <a href="#">Action</a>
                        <a href="#">Adventure</a>
                        <a href="#">Animation</a>
                        <a href="#">Biography</a>
                        <a href="#">Comedy</a>
                        <a href="#">Crime</a>
                        <a href="#">Documentary</a>
                        <a href="#">Drama</a>
                        <a href="#">Family</a>
                        <a href="#">Fantasy</a>
                        <a href="#">Game-Show</a>
                        <a href="#">History</a>
                        <a href="#">Horror</a>
                    </div>
                </div>

                
                <div className="main">

                <div className="container">
                    <input className="searchbar" placeholder="Enter search term" onChange={this.searchChangeHandler.bind(this)}></input>
                </div>
                    <div className="container-fluid">
                        {this.state.rows}
                    </div>
                </div>

            </div>
        );
    }
}

export default View;
