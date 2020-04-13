import React, {useState, useEffect} from 'react';
import TvRow from '../js/TvRow';
import MovieRow from '../js/MovieRow';
import $ from 'jquery';
import Navbar from './navbar';

function View() {

    const [page_num, setPageNum] = useState(1);
    const [total_pages, setTotalPages] = useState(null);
    const [given, setGiven] = useState('it');
    const [genre, setGenre] = useState('');
    const [movie, setMovie] = useState([]);
    const [rows, setRows] = useState([]);

    const rendermovies = (results) => {
        var movieRows = [];

        results.forEach((movie) => {
            if (movie.title && movie.poster_path) {
                movie.poster_src = "https://image.tmdb.org/t/p/w400/" + movie.poster_path;
                const movieRow = <MovieRow key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            }

            else if (movie.name && movie.poster_path) {
                movie.poster_src = "https://image.tmdb.org/t/p/w400/" + movie.poster_path;
                const movieRow = <TvRow key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            }
            
            
        })
        return movieRows;
    }

    const performSearch = (searchTerm) => {

        const urlStr = "https://api.themoviedb.org/3/search/multi?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&query=" + searchTerm + "&page=" + page_num;
        console.log(urlStr);
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }


    const searchChangeHandler = (event) => {
        console.log(event.target.value);
        const searchTerm = event.target.value;
        setGiven(searchTerm);
        performSearch(searchTerm);
    }

    const showupcoming = () => {
        
        const urlStr = "https://api.themoviedb.org/3/movie/upcoming?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })
    }

    const popularmovies = () => {
        const urlStr = "https://api.themoviedb.org/3/movie/popular?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    const topratedmovies = () => {
        const urlStr = "https://api.themoviedb.org/3/movie/top_rated?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    const popularshows = () => {
        const urlStr = "https://api.themoviedb.org/3/tv/popular?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                console.log(results);
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }

    const topratedshows = () => {
        const urlStr = "https://api.themoviedb.org/3/tv/top_rated?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US%page=" + page_num;
        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    }


    const showgenre = (event) => {
        let genre = event.target.getAttribute('data');
        const urlStr = "https://api.themoviedb.org/3/discover/movie?api_key=d31bf19d99f4cca10b2a1aa31b7abeaf&language=en-US&with_genres=" + genre + "&page=" + page_num;

        $.ajax({
            url: urlStr,
            success: (searchResults) => {
                console.log("fetched data success");
                const results = searchResults.results;
                setRows(rendermovies(results));
            },
            error: (xhr, status, err) => {
                console.log("failed");
            }
        })

    
    }

    const nextpage = () => {
        
        if (movie) {
            setPageNum(page_num += 1);
            
            let searchTerm = given;
            performSearch(searchTerm)
        }

    }

    const previouspage = () => {

        if (movie && page_num != 1) {
            setPageNum(page_num -= 1);

            let searchTerm = given;
            performSearch(searchTerm)
        }

    }

    useEffect(() => {
        popularmovies();
    }, [])

    return (
        <div className="allmovies">
            <Navbar />
            
            <div className="main">
                <div className="header-content">
                    <div className="row">
                        <div className="col-12 title">
                            <h5>FILMS</h5>
                            <h6>Browse the film library to discover something new</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <button className="btn-sm btn-outline-danger mr-1">Release Dates</button>
                            <button className="btn-sm btn-outline-danger mr-1">Genres</button>
                            <button className="btn-sm btn-outline-danger mr-1">Locations</button>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-1">
                            <button type="button" className="btn btn-outline-secondary">Sort</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>Displaying 1 to 24 out of 288283</p>
                        </div>
                    </div>
                    <div className="row last">
                        <div className="col-3 fontines">
                            <div onClick={previouspage}><i className="fas fa-angle-left btn-icon"></i></div>
                        </div>
                        <div className="col-8 text-center">
                            <input className="searchbar" placeholder="Enter search term" onChange={searchChangeHandler.bind(this)}></input>
                        </div>
                        <div className="col-1 fonties">
                            <div onClick={nextpage}><i className="fas fa-angle-right btn-icon"></i></div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {rows}
                </div>

            </div>
            
            <footer className="footer">
            <p>Questions? Call 1-866-579-7172</p>
            <div className="footer-cols">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways To Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Getflix Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Cards</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>

        </footer>

        </div>
    );
}

export default View;
