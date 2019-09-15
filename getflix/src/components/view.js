import React, {Component} from 'react';
import MovieRow from '../js/MovieRow';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {page_num: 1,
        total_pages: null,
        given: "it",
        genre: "",
        movie: []};

        this.performSearch("it");
    }

    performSearch(searchTerm) {

        const urlStr = "https://api.themoviedb.org/3/search/multi?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&query=" + searchTerm + "&page=" + this.state.page_num;
        console.log(urlStr);
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                
                var movieRows = [];

                results.forEach((movie) => {
                    if (movie.title && movie.poster_path) {
                        movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                        const movieRow = <MovieRow key={movie.id} movie={movie} />
                        movieRows.push(movieRow);
                    }
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
        this.state.given = searchTerm;
        this.performSearch(searchTerm);
    }

    showgenre = (event) => {
        let genre = event.target.getAttribute('data');

        const urlStr = "";
    }

    nextpage = () => {
        
        if (this.state.movie) {
            this.setState({
                page_num: this.state.page_num += 1
            })
            
            let searchTerm = this.state.given;
            this.performSearch(searchTerm)
        }

    }

    previouspage = () => {

        if (this.state.movie && this.state.page_num != 1) {
            this.setState({
                page_num: this.state.page_num -= 1
            })

            let searchTerm = this.state.given;
            this.performSearch(searchTerm)
        }

    }


    render() {
        return (
            <div>

                <div className="Nav">
                    
                    <h1>Movie & TV Search</h1>
                </div>

                <div className="sidenav">
                    <div className="logo grid-item"><Link to="/"><img src={require('../img/logo.png')} height="60px" /></Link></div>
                    <div className="grid-item">
                        <h1>Charts</h1>
                        <a href="#">Most Popular Movies</a>
                        <a href="#">Top Rated Movies</a>
                        <a href="#">Most Popular TV</a>
                        <a href="#">Top Rated TV</a>
                    </div>
                    <div className="grid-item">
                        <h1>Top Rated TV Shows by Genre</h1>
                        <a href="#" onClick={this.showgenre} data="Action">Action</a>
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

                <div className="search">
                    <input className="searchbar" placeholder="Enter search term" onChange={this.searchChangeHandler.bind(this)}></input>
                </div>
                    <div className="container-fluid">
                        {this.state.rows}
                    </div>

                    <div className="buttons">
                        <div className="butt1">
                            <input type="button" className="btn-lg btn-secondary bg-dark" onClick={this.previouspage} value="Previous Page" />
                        </div>
                        <div className="butt2">
                            <input type="button" className="btn-lg btn-secondary bg-dark" onClick={this.nextpage} value="Next Page" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default View;
