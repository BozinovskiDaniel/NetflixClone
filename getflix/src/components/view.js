import React, {Component} from 'react';
import TvRow from '../js/TvRow';
import MovieRow from '../js/MovieRow';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {page_num: 1,
        total_pages: null,
        given: "",
        genre: "",
        movie: []};

        this.performSearch("it");
    }

    rendermovies(results) {
        var movieRows = [];

        results.forEach((movie) => {
            if (movie.title && movie.poster_path) {
                movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                const movieRow = <MovieRow key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            }

            else if (movie.name && movie.poster_path) {
                movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                const movieRow = <TvRow key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            }
            
            
        })
        return movieRows;
    }

    performSearch(searchTerm) {

        const urlStr = "https://api.themoviedb.org/3/search/multi?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&query=" + searchTerm + "&page=" + this.state.page_num;
        console.log(urlStr);
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                this.setState({rows: this.rendermovies(results)});
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

    showupcoming = () => {
        
        const urlStr = "https://api.themoviedb.org/3/movie/upcoming?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + this.state.page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }

    popularmovies = () => {
        const urlStr = "https://api.themoviedb.org/3/movie/popular?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + this.state.page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    topratedmovies = () => {
        const urlStr = "https://api.themoviedb.org/3/movie/top_rated?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + this.state.page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    popularshows = () => {
        const urlStr = "https://api.themoviedb.org/3/tv/popular?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + this.state.page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    topratedshows = () => {
        const urlStr = "https://api.themoviedb.org/3/tv/top_rated?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + this.state.page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }


    showgenre = (event) => {
        let genre = event.target.getAttribute('data');
        const urlStr = "https://api.themoviedb.org/3/discover/movie?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&with_genres=" + genre + "&page=" + this.state.page_num;

        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                this.setState({rows: this.rendermovies(results)});
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    
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
                        <a href="#" onClick={this.popularmovies}>Most Popular Movies</a>
                        <a href="#" onClick={this.topratedmovies}>Top Rated Movies</a>
                        <a href="#" onClick={this.popularshows}>Most Popular TV</a>
                        <a href="#" onClick={this.topratedshows}>Top Rated TV</a>
                        <a href="#" onClick={this.showupcoming}>Upcoming Movies</a>
                    </div>
                    <div className="grid-item">
                        <h1>Top Rated TV Shows by Genre</h1>
                        <a href="#" onClick={this.showgenre} data="28">Action</a>
                        <a href="#" onClick={this.showgenre} data="12">Adventure</a>
                        <a href="#" onClick={this.showgenre} data="16">Animation</a>
                        <a href="#" onClick={this.showgenre} data="35">Comedy</a>
                        <a href="#" onClick={this.showgenre} data="80">Crime</a>
                        <a href="#" onClick={this.showgenre} data="99">Documentary</a>
                        <a href="#" onClick={this.showgenre} data="18">Drama</a>
                        <a href="#" onClick={this.showgenre} data="10751">Family</a>
                        <a href="#" onClick={this.showgenre} data="14">Fantasy</a>
                        <a href="#" onClick={this.showgenre} data="36">History</a>
                        <a href="#" onClick={this.showgenre} data="27">Horror</a>
                        <a href="#" onClick={this.showgenre} data="10749">Romance</a>
                        <a href="#" onClick={this.showgenre} data="53">Thriller</a>
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
