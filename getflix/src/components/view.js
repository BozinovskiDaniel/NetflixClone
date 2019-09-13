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

                <input className="searchbar" placeholder="Enter search term" onChange={this.searchChangeHandler.bind(this)}></input>
                {this.state.rows}

            </div>
        );
    }
}

export default View;
